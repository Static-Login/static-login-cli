oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g static-login-cli
$ static-login-cli COMMAND
running command...
$ static-login-cli (--version)
static-login-cli/0.0.0 darwin-arm64 node-v18.18.0
$ static-login-cli --help [COMMAND]
USAGE
  $ static-login-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`static-login-cli hello PERSON`](#static-login-cli-hello-person)
* [`static-login-cli hello world`](#static-login-cli-hello-world)
* [`static-login-cli help [COMMANDS]`](#static-login-cli-help-commands)
* [`static-login-cli plugins`](#static-login-cli-plugins)
* [`static-login-cli plugins:install PLUGIN...`](#static-login-cli-pluginsinstall-plugin)
* [`static-login-cli plugins:inspect PLUGIN...`](#static-login-cli-pluginsinspect-plugin)
* [`static-login-cli plugins:install PLUGIN...`](#static-login-cli-pluginsinstall-plugin-1)
* [`static-login-cli plugins:link PLUGIN`](#static-login-cli-pluginslink-plugin)
* [`static-login-cli plugins:uninstall PLUGIN...`](#static-login-cli-pluginsuninstall-plugin)
* [`static-login-cli plugins reset`](#static-login-cli-plugins-reset)
* [`static-login-cli plugins:uninstall PLUGIN...`](#static-login-cli-pluginsuninstall-plugin-1)
* [`static-login-cli plugins:uninstall PLUGIN...`](#static-login-cli-pluginsuninstall-plugin-2)
* [`static-login-cli plugins update`](#static-login-cli-plugins-update)

## `static-login-cli hello PERSON`

Say hello

```
USAGE
  $ static-login-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/static-login/static-login-cli/blob/v0.0.0/src/commands/hello/index.ts)_

## `static-login-cli hello world`

Say hello world

```
USAGE
  $ static-login-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ static-login-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/static-login/static-login-cli/blob/v0.0.0/src/commands/hello/world.ts)_

## `static-login-cli help [COMMANDS]`

Display help for static-login-cli.

```
USAGE
  $ static-login-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for static-login-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `static-login-cli plugins`

List installed plugins.

```
USAGE
  $ static-login-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ static-login-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/index.ts)_

## `static-login-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ static-login-cli plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ static-login-cli plugins add

EXAMPLES
  $ static-login-cli plugins add myplugin 

  $ static-login-cli plugins add https://github.com/someuser/someplugin

  $ static-login-cli plugins add someuser/someplugin
```

## `static-login-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ static-login-cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ static-login-cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/inspect.ts)_

## `static-login-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ static-login-cli plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ static-login-cli plugins add

EXAMPLES
  $ static-login-cli plugins install myplugin 

  $ static-login-cli plugins install https://github.com/someuser/someplugin

  $ static-login-cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/install.ts)_

## `static-login-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ static-login-cli plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ static-login-cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/link.ts)_

## `static-login-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ static-login-cli plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ static-login-cli plugins unlink
  $ static-login-cli plugins remove

EXAMPLES
  $ static-login-cli plugins remove myplugin
```

## `static-login-cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ static-login-cli plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/reset.ts)_

## `static-login-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ static-login-cli plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ static-login-cli plugins unlink
  $ static-login-cli plugins remove

EXAMPLES
  $ static-login-cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/uninstall.ts)_

## `static-login-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ static-login-cli plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ static-login-cli plugins unlink
  $ static-login-cli plugins remove

EXAMPLES
  $ static-login-cli plugins unlink myplugin
```

## `static-login-cli plugins update`

Update installed plugins.

```
USAGE
  $ static-login-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/update.ts)_
<!-- commandsstop -->
