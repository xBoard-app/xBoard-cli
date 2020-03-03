import {exec} from '../utils/utils'
import {promises as fs} from 'fs'
import {join} from 'path'
import Listr = require('listr')

export const generateService = async (name: string) => {
  const dependencies = ['@grpc/proto-loader', '@nestjs/microservices', 'grpc']

  const tasks = new Listr([
    {
      title: 'Generate nest project',
      task: () => exec(`nest new --skip-git --package-manager yarn ${name}`),
    },
    {
      title: 'Add microservice dependencies',
      task: () => exec(`cd ${name} && yarn add ${dependencies.join(' ')}`),
    },
    {
      title: 'Add Dockerfile',
      task: async () => {
        const contents = await fs.readFile(
          join(process.cwd(), 'cli/files', 'Dockerfile'),
        )
        return fs.writeFile(join(process.cwd(), name, 'Dockerfile'), contents)
      },
    },
  ])

  return tasks.run()
}
