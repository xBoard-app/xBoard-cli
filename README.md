xBoard-cli
==========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/xBoard-cli.svg)](https://npmjs.org/package/xBoard-cli)
[![Downloads/week](https://img.shields.io/npm/dw/xBoard-cli.svg)](https://npmjs.org/package/xBoard-cli)
[![License](https://img.shields.io/npm/l/xBoard-cli.svg)](https://github.com/mareksl/xBoard-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g xBoard-cli
$ xBoard-cli COMMAND
running command...
$ xBoard-cli (-v|--version|version)
xBoard-cli/0.0.0 linux-x64 node-v12.11.1
$ xBoard-cli --help [COMMAND]
USAGE
  $ xBoard-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`xBoard-cli help [COMMAND]`](#xboard-cli-help-command)
* [`xBoard-cli new [NAME]`](#xboard-cli-new-name)

## `xBoard-cli help [COMMAND]`

display help for xBoard-cli

```
USAGE
  $ xBoard-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `xBoard-cli new [NAME]`

Generates new project

```
USAGE
  $ xBoard-cli new [NAME]

OPTIONS
  -f, --force
  -h, --help              show CLI help
  -t, --type=(s|service)  (required) type of project to generate
```

_See code: [src/commands/new.ts](https://github.com/mareksl/xBoard-cli/blob/v0.0.0/src/commands/new.ts)_
<!-- commandsstop -->
