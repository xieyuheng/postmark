import { Node, parseDocument } from "../node"

{
  const emphasize = "Hello *world*"
  const strong = "Hi **there**"
  const thematicBreak = "\n---\n"
  const codeBlock = renderCodeBlock("sisuo", "console.log('Hello')")
  const lineBreak = "Hello  \nWorld"
  const softBreak = "Hello\nWorld"

  const text = [
    emphasize,
    strong,
    thematicBreak,
    codeBlock,
    lineBreak,
    softBreak,
  ].join("\n\n")

  const node = parseDocument(text)
  console.dir(node, { depth: null })
}

function renderCodeBlock(info: string, text: string): string {
  let s = ""
  s += "``` " + info + "\n"
  s += text + "\n"
  s += "```" + "\n"
  return s
}
