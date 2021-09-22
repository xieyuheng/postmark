import { parseDocument, assertDocument } from "../api"

{
  const hardLineBreak = "Hello  \nWorld"
  const node = parseDocument(hardLineBreak)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", value: "Hello" },
        { kind: "HardLineBreak" },
        { kind: "Text", value: "World" },
      ],
    },
  ])
}
