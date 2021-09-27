import { Parser } from "../.."
import Path from "path"
import fs from "fs"

export const command = "format <file>"
export const description = "Format a markdown file"
export const builder = {}

type Argv = {
  file: string
}

export const handler = async (argv: Argv) => {
  const file = argv["file"]
  const text = await fs.promises.readFile(file, "utf8")

  const parser = new Parser()
  const document = parser.parseDocument(text)

  const result = document.format()

  console.log(result)
}
