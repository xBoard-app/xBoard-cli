import { promises as fs } from 'fs';
import { parse, stringify } from 'yaml';
import { join } from 'path';
import { getConfigSrc } from '../utils/utils';

const getPortNumber = (services: DockerCompose.Services) => {
  return Object.keys(services)
    .filter(
      serviceName => serviceName !== 'frontend' && serviceName !== 'proxy',
    )
    .map(serviceName => services[serviceName])
    .reduce((result, service) => {
      const port = parseInt(service.ports[service.ports.length - 1], 10);
      if (port === result) {
        return result + 1;
      }
      if (port > result) {
        return port + 1;
      }
      return result;
    }, 50051);
};

export const addProjectToCompose = async (name: string, ctx: any) => {
  const composeSrc = await getConfigSrc('docker-compose.yml');
  const composeFile = await fs.readFile(composeSrc, 'utf8');
  const composeObj: DockerCompose.RootObject = parse(composeFile);
  if (composeObj.services[name]) {
    delete composeObj.services[name];
  }
  const port = getPortNumber(composeObj.services);
  ctx.port = port;

  composeObj.services[name] = {
    image: `x-board-${name}:dev`,
    networks: ['envoymesh'],
    build: {
      context: `./services/${name}`,
      target: 'dev',
    },
    depends_on: ['proxy'],
    ports: [`${port}:${port}`],
  };

  await fs.writeFile(
    join(process.cwd(), 'docker-compose.yml'),
    stringify(composeObj),
  );
};
