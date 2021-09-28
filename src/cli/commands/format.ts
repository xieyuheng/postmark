import { Parser } from "../.."
import Path from "path"
import fs from "fs"

export const command = "render <file>"
export const description = "Render a markdown file to html"
export const builder = {}

type Argv = {
  file: string
}

export const handler = async (argv: Argv) => {
  const file = argv["file"]
  const text = await fs.promises.readFile(file, "utf8")

  const parser = new Parser()
  const document = parser.parseDocument(text)

  const result = document.render()

  console.log(result)
}
