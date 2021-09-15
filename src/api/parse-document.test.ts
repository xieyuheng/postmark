import { Node, parseDocument, assertDocument } from "../api"

{
  const emphasize = "Hello *world*"
  const node = parseDocument(emphasize)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", value: "Hello " },
        {
          kind: "Emphasize",
          children: [{ kind: "Text", value: "world" }],
        },
      ],
    },
  ])
}

{
  const strong = "Hi **there**"
  const node = parseDocument(strong)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", value: "Hi " },
        {
          kind: "Strong",
          children: [{ kind: "Text", value: "there" }],
        },
      ],
    },
  ])
}

{
  const thematicBreak = "\n---\n"
  const node = parseDocument(thematicBreak)

  assertDocument(node, [
    {
      kind: "ThematicBreak",
    },
  ])
}

{
  const codeBlock = renderCodeBlock("sisuo", "console.log('Hello')")
  const node = parseDocument(codeBlock)

  assertDocument(node, [
    {
      kind: "CodeBlock",
      info: "sisuo",
      value: "console.log('Hello')\n",
    },
  ])

  function renderCodeBlock(info: string, text: string): string {
    let s = ""
    s += "``` " + info + "\n"
    s += text + "\n"
    s += "```" + "\n"
    return s
  }
}

{
  const lineBreak = "Hello  \nWorld"
  const node = parseDocument(lineBreak)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", value: "Hello" },
        { kind: "LineBreak" },
        { kind: "Text", value: "World" },
      ],
    },
  ])
}

{
  const softBreak = "Hello\nWorld"
  const node = parseDocument(softBreak)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", value: "Hello" },
        { kind: "SoftBreak" },
        { kind: "Text", value: "World" },
      ],
    },
  ])
}
