import { Node, parseNode } from "../node"

{
  const codeBlock = renderCodeBlock("sisuo", "console.log('Hello')")
  const lineBreak = "Hello  \nWorld"

  const text = `\
Hello *world*

Hi **there**

---

${codeBlock}
${lineBreak}
`

  const node = parseNode(text)
  console.dir(node, { depth: null })
}

function renderCodeBlock(info: string, text: string): string {
  let s = ""
  s += "``` " + info + "\n"
  s += text + "\n"
  s += "```" + "\n"
  return s
}
