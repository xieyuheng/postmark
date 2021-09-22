import { parseDocument, assertDocument } from "../../api"

{
  const softLineBreak = "Hello\nWorld"
  const node = parseDocument(softLineBreak)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", value: "Hello" },
        { kind: "SoftLineBreak" },
        { kind: "Text", value: "World" },
      ],
    },
  ])
}
