import { promises as fs } from 'fs';
import { join } from 'path';
import { parse, stringify } from 'yaml';
import { getConfigSrc } from '../utils/utils';

const createClusterConfig = (
  name: string,
  port: number,
): EnvoyConfig.Cluster => ({
  name: `${name}_service`,
  connect_timeout: '0.25s',
  type: 'logical_dns',
  http2_protocol_options: {},
  lb_policy: 'round_robin',
  hosts: [{ socket_address: { address: name, port_value: port } }],
});
const createRouteConfig = (name: string): EnvoyConfig.Route => ({
  match: { prefix: `/${name}` },
  route: { cluster: `${name}_service`, max_grpc_timeout: '0s' },
});

export const addProjectToEnvoy = async (name: string, ctx: any) => {
  const { port } = ctx;
  const configSrc = await getConfigSrc('envoy.yaml');
  const configFile = await fs.readFile(configSrc, 'utf8');
  const configObj: EnvoyConfig.RootObject = parse(configFile);
  const serviceName = `${name}_service`;

  const clusterConfig = createClusterConfig(name, port);
  const routeConfig = createRouteConfig(name);
  const clusters = configObj.static_resources.clusters || [];
  const clusterIndex = clusters.findIndex(
    cluster => cluster.name === serviceName,
  );
  if (clusterIndex > -1) {
    clusters.splice(clusterIndex, 1);
  }
  clusters.push(clusterConfig);
  configObj.static_resources.clusters = clusters;

  const routes =
    configObj.static_resources.listeners[0].filter_chains[0].filters[0].config
      .route_config.virtual_hosts[0].routes || [];
  const routeIndex = routes.findIndex(
    route => route.route.cluster === serviceName,
  );
  if (routeIndex > -1) {
    routes.splice(routeIndex, 1);
  }
  routes.push(routeConfig);
  configObj.static_resources.listeners[0].filter_chains[0].filters[0].config.route_config.virtual_hosts[0].routes = routes;

  await fs.writeFile(join(process.cwd(), 'envoy.yaml'), stringify(configObj));
};
