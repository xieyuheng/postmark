import { Node, parseDocument } from "../api"

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

  // assertNodeKind(node, {
  //   kind: "Document",
  //   children: [
  //     {
  //       kind: "Paragraph",
  //       children: [
  //         { kind: "Text", value: "Hello " },
  //         {
  //           kind: "Emphasize",
  //           children: [{ kind: "Text", value: "world" }],
  //         },
  //       ],
  //     },
  //     {
  //       kind: "Paragraph",
  //       children: [
  //         { kind: "Text", value: "Hi " },
  //         {
  //           kind: "Strong",
  //           children: [{ kind: "Text", value: "there" }],
  //         },
  //       ],
  //     },
  //     {
  //       kind: "ThematicBreak",
  //     },
  //     {
  //       kind: "CodeBlock",
  //       info: "sisuo",
  //       value: "console.log('Hello')\n",
  //     },
  //     {
  //       kind: "Paragraph",
  //       children: [
  //         { kind: "Text", value: "Hello" },
  //         { kind: "LineBreak" },
  //         { kind: "Text", value: "World" },
  //       ],
  //     },
  //     {
  //       kind: "Paragraph",
  //       children: [
  //         { kind: "Text", value: "Hello" },
  //         { kind: "SoftBreak" },
  //         { kind: "Text", value: "World" },
  //       ],
  //     },
  //   ],
  // })
}

function renderCodeBlock(info: string, text: string): string {
  let s = ""
  s += "``` " + info + "\n"
  s += text + "\n"
  s += "```" + "\n"
  return s
}
