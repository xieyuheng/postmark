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

{
  const code = "`console.log('Hello')`"
  const node = parseDocument(code)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        {
          kind: "Code",
          value: "console.log('Hello')",
        },
      ],
    },
  ])
}

{
  const headings = `\
# heading 1
## heading 2
### heading 3
`

  const node = parseDocument(headings)

  assertDocument(node, [
    {
      kind: "Heading",
      level: 1,
      children: [{ kind: "Text", value: "heading 1" }],
    },
    {
      kind: "Heading",
      level: 2,
      children: [{ kind: "Text", value: "heading 2" }],
    },
    {
      kind: "Heading",
      level: 3,
      children: [{ kind: "Text", value: "heading 3" }],
    },
  ])
}

{
  const blockQuote = `\
> Make the change easy, then make the easy change.
>
> -- Kent Beck
`

  const node = parseDocument(blockQuote)

  assertDocument(node, [
    {
      kind: "BlockQuote",
      children: [
        {
          kind: "Paragraph",
          children: [
            {
              kind: "Text",
              value: "Make the change easy, then make the easy change.",
            },
          ],
        },
        {
          kind: "Paragraph",
          children: [{ kind: "Text", value: "-- Kent Beck" }],
        },
      ],
    },
  ])
}
