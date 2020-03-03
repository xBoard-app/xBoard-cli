import { promises as fs } from 'fs';
import { join } from 'path';

export const copyFileToProject = async (name: string, filename: string) => {
  const contents = await fs.readFile(
    join(process.cwd(), 'cli', 'files', filename),
  );
  return fs.writeFile(
    join(process.cwd(), 'services', name, filename),
    contents,
  );
};
