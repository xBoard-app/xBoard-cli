import {promisify} from 'util';
import * as childProcess from 'child_process';
import rimraf = require('rimraf');

export const exec = promisify(childProcess.exec);
export const rmrf = promisify(rimraf);
