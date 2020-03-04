import { promisify } from 'util';
import * as childProcess from 'child_process';
import rimraf = require('rimraf');
import { promises as fs } from 'fs';
import { join } from 'path';

export const exec = promisify(childProcess.exec);

export const rmrf = promisify(rimraf);

export const getConfigSrc = async (filename: string) => {
  const path = join(process.cwd(), filename);
  try {
    await fs.access(path);
    return path;
  } catch (error) {
    return join(process.cwd(), 'cli', 'files', filename);
  }
};
