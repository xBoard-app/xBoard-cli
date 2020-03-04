import { rmrf } from '../utils/utils';
import { promises as fs } from 'fs';
import { join } from 'path';
import Listr = require('listr');
import {
  generateNestProject,
  installPackages,
  copyFileToProject,
  addProjectToCompose,
} from '../tasks';
import { addProjectToEnvoy } from '../tasks/envoy';

const exists = async (path: string) => {
  try {
    await fs.access(path);
    return true;
  } catch (error) {
    return false;
  }
};

export const generateService = async (name: string, force: boolean) => {
  const path = join(process.cwd(), 'services', name);
  const dirExists = await exists(path);

  if (dirExists && !force) {
    throw new Error('Service already exists');
  }

  const dependencies = ['@grpc/proto-loader', '@nestjs/microservices', 'grpc'];
  const tasks = new Listr([
    {
      title: 'Remove project directory',
      enabled: () => dirExists,
      task: () => rmrf(path),
    },
    {
      title: 'Generate nest project',
      task: () => generateNestProject(name),
    },
    {
      title: 'Add microservice dependencies',
      task: () => installPackages(name, dependencies),
    },
    {
      title: 'Add Dockerfile',
      task: () => copyFileToProject(name, 'Dockerfile'),
    },
    {
      title: 'Add project to docker-compose.yml',
      task: ctx => addProjectToCompose(name, ctx),
    },
    {
      title: 'Add project to envoy.yaml',
      task: ctx => addProjectToEnvoy(name, ctx),
    },
  ]);

  return tasks.run();
};
