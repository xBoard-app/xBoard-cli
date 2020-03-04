import { Command, flags } from '@oclif/command';
import { cli } from 'cli-ux';
import { generateService } from '../generators';
import { green, white } from 'chalk';

export default class New extends Command {
  static description = 'Generates new project';

  static flags = {
    help: flags.help({ char: 'h' }),
    type: flags.enum({
      char: 't',
      description: 'type of project to generate',
      options: ['s', 'service'],
      required: true,
    }),
    force: flags.boolean({ char: 'f' }),
  };

  static args = [{ name: 'name' }];

  async run() {
    const { args, flags } = this.parse(New);
    if (!args.name) {
      this.error('Please provide a name');
    }

    if (flags.force) {
      this.warn(
        `Will force create ${white.bgBlue(
          args.name,
        )} service, replacing any existing service with the same name`,
      );
      const confirmed = await cli.confirm('Continue? (y/n)');
      if (!confirmed) {
        return;
      }
    }

    switch (flags.type) {
      case 's':
      case 'service':
        try {
          await generateService(args.name, flags.force);
          this.log(green(`Service "${args.name}" has been generated`));
        } catch (error) {
          this.error(error.message);
        }

        break;
      default:
        this.error('Please provide a type');
    }
  }
}
