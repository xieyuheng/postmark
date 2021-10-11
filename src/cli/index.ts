import * as CommandRunners from "@xieyuheng/enchanter/lib/command-runners"
import { CommonHelpCommand } from "@xieyuheng/enchanter/lib/commands"
import * as Commands from "./commands"

export function run(): void {
  new CommandRunners.CommonCommandRunner({
    // defaultCommand: new Commands.DefaultCommand(),
    commands: [
      // new Commands.FormatCommand(),
      new Commands.RenderCommand(),
      new CommonHelpCommand(),
    ],
  }).run()
}
