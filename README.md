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
* [`xBoard-cli hello [FILE]`](#xboard-cli-hello-file)
* [`xBoard-cli help [COMMAND]`](#xboard-cli-help-command)
* [`xBoard-cli new [FILE]`](#xboard-cli-new-file)

## `xBoard-cli hello [FILE]`

describe the command here

```
USAGE
  $ xBoard-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ xBoard-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/mareksl/xBoard-cli/blob/v0.0.0/src/commands/hello.ts)_

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

## `xBoard-cli new [FILE]`

describe the command here

```
USAGE
  $ xBoard-cli new [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/new.ts](https://github.com/mareksl/xBoard-cli/blob/v0.0.0/src/commands/new.ts)_
<!-- commandsstop -->
