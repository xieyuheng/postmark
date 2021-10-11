import { Command } from "@xieyuheng/enchanter/lib/command"
import { CommandRunner } from "@xieyuheng/enchanter/lib/command-runner"
import { Parser } from "../../api"
import ty from "@xieyuheng/ty"
import Path from "path"
import fs from "fs"

type Args = { file: string }
type Opts = {}

export class RenderCommand extends Command<Args, Opts> {
  name = "render"

  description = "Render a markdown file to html"

  args = { file: ty.string() }

  async execute(argv: Args & Opts): Promise<void> {
    Command.assertFile(argv["file"])
    const file = argv["file"]
    const text = await fs.promises.readFile(file, "utf8")
    const parser = new Parser()
    const document = parser.parseDocument(text)
    const result = document.render()
    console.log(result)
  }
}
