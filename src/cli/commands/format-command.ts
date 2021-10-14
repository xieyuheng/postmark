import { Command } from "@xieyuheng/enchanter/lib/command"
import { CommandRunner } from "@xieyuheng/enchanter/lib/command-runner"
import { Parser } from "../../api"
import ty from "@xieyuheng/ty"
import Path from "path"
import fs from "fs"

type Args = { file: string }
type Opts = {}

export class FormatCommand extends Command<Args, Opts> {
  name = "format"

  description = "Format a markdown file"

  args = { file: ty.string() }

  // prettier-ignore
  help(runner: CommandRunner): string {
    const { blue } = this.colors

    return [
      `The ${blue(this.name)} command formats a markdown file to standard form.`,
      ``,
      `The resulting markdown will be printed out to console, for you to check.`,
      ``,
      blue(`  ${runner.name} ${this.name} 00000-zettelkasten.md`),
      ``,
      `You can pipe the output to another program,`,
      `for example, ${blue("less")}, to view the output little by little.`,
      ``,
      blue(`  ${runner.name} ${this.name} 00000-zettelkasten.md | less`),
      ``,
      `You can redirect the output to a file.`,
      ``,
      blue(`  ${runner.name} ${this.name} 00000-zettelkasten.md > 00000-zettelkasten-standard.md`),
      ``,
    ].join("\n")
  }

  async execute(argv: Args & Opts): Promise<void> {
    Command.assertFile(argv["file"])
    const file = argv["file"]
    const text = await fs.promises.readFile(file, "utf8")
    const parser = new Parser()
    const document = parser.parseDocument(text)
    const result = document.format()
    console.log(result)
  }
}