import { exec } from '../utils/utils';
import { join } from 'path';

export const installPackages = (name: string, deps: string[]) =>
  exec(
    `cd ${join(process.cwd(), 'services', name)} && yarn add ${deps.join(' ')}`,
  );
