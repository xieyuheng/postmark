import { parseDocument, assertDocument } from "../../api"

{
  const paragraph = `\
A, B, C!

A! B! C!
`

  const node = parseDocument(paragraph)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", value: "A, B, C" },
        // NOTE Be careful about this "!"
        { kind: "Text", value: "!" },
      ],
    },
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", value: "A" },
        { kind: "Text", value: "!" },
        { kind: "Text", value: " B" },
        { kind: "Text", value: "!" },
        { kind: "Text", value: " C" },
        { kind: "Text", value: "!" },
      ],
    },
  ])
}
