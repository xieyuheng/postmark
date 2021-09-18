import { parseDocument, assertDocument } from "../api"

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
