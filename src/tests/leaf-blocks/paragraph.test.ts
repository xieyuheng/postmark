import { parseDocument, assertDocument } from "../../api"

{
  const text = `\
A, B, C!

A! B! C!
`

  const document = parseDocument(text)

  assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", text: "A, B, C" },
        // NOTE Be careful about this "!"
        { kind: "Text", text: "!" },
      ],
    },
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", text: "A" },
        { kind: "Text", text: "!" },
        { kind: "Text", text: " B" },
        { kind: "Text", text: "!" },
        { kind: "Text", text: " C" },
        { kind: "Text", text: "!" },
      ],
    },
  ])
}
