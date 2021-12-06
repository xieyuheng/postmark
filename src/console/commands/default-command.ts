import { Command } from "@enchanterjs/enchanter/lib/command"
import { CommandRunner } from "@enchanterjs/enchanter/lib/command-runner"
import { CommonHelpCommand } from "@enchanterjs/enchanter/lib/commands"
import ty from "@xieyuheng/ty"
import app from "../../app"

type Args = {}
type Opts = { help?: boolean; version?: boolean }

export class DefaultCommand extends Command<Args, Opts> {
  name = "default"

  description = "Print help or version"

  args = {}
  opts = { help: ty.optional(ty.boolean()), version: ty.optional(ty.boolean()) }
  alias = { help: ["h"], version: ["v"] }

  async execute(argv: Args & Opts, runner: CommandRunner): Promise<void> {
    if (argv["help"]) {
      const command = new CommonHelpCommand()
      await command.execute({}, runner)
      return
    }

    if (argv["version"]) {
      console.log(app.config.pkg.version)
      return
    }

    {
      const command = new CommonHelpCommand()
      await command.execute({}, runner)
      return
    }
  }
}
