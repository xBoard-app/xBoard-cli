import {Command, flags} from '@oclif/command'
import {generateService} from '../generators'
import {green} from 'chalk'

export default class New extends Command {
  static description = 'generates new project'

  static flags = {
    help: flags.help({char: 'h'}),
    type: flags.enum({
      char: 't',
      description: 'type of project to generate',
      options: ['s', 'service'],
    }),
  }

  static args = [{name: 'name'}]

  async run() {
    const {args, flags} = this.parse(New)
    if (!args.name) {
      this.error('Please provide a name')
    }

    switch (flags.type) {
      case 's':
      case 'service':
        generateService(args.name)
          .then(() =>
            this.log(green(`Service "${args.name}" has been generated`)),
          )
          .catch(error => this.log(error))

        break
      default:
        this.error('Please provide a type')
    }
  }
}
