import { parseDocument, assertDocument, formatCodeBlock } from "../api"

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
  const codeBlock = formatCodeBlock("sisuo", "console.log('Hello')")
  const node = parseDocument(codeBlock)

  assertDocument(node, [
    {
      kind: "CodeBlock",
      info: "sisuo",
      value: "console.log('Hello')\n",
    },
  ])
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

{
  const link = '[example link](https://example.com "example title")'
  const node = parseDocument(link)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        {
          kind: "Link",
          title: "example title",
          href: "https://example.com",
          children: [{ kind: "Text", value: "example link" }],
        },
      ],
    },
  ])
}

{
  const image = '![example image](https://example.com "example title")'
  const node = parseDocument(image)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        {
          kind: "Image",
          title: "example title",
          href: "https://example.com",
          children: [{ kind: "Text", value: "example image" }],
        },
      ],
    },
  ])
}
