import { parseDocument, assertDocument } from "../api"

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
