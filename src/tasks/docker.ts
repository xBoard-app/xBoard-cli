import { promises as fs } from 'fs';
import { parse, stringify } from 'yaml';
import { join } from 'path';

interface ServicesConfig {
  [key: string]: {
    ports: string[];
  };
}

const getPortNumber = (services: ServicesConfig) => {
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

export const addProjectToCompose = async (name: string) => {
  const composeFile = await fs.readFile(
    join(process.cwd(), 'cli', 'files', 'docker-compose.yml'),
    'utf8',
  );
  const composeObj = parse(composeFile);
  composeObj.services[name] = {
    image: `x-board-${name}:dev`,
    networks: ['envoymesh'],
    build: {
      context: `./services/${name}`,
      target: 'dev',
    },
    depends_on: ['proxy'],
    ports: [
      `${getPortNumber(composeObj.services)}:${getPortNumber(
        composeObj.services,
      )}`,
    ],
  };
  return fs.writeFile(
    join(process.cwd(), 'docker-compose.yml'),
    stringify(composeObj),
  );
};
