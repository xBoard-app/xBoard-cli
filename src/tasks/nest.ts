import { exec } from '../utils/utils';

export const generateNestProject = (name: string) =>
  exec(`nest new --skip-git --package-manager yarn services/${name}`);
