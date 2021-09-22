import { parseDocument, assertDocument } from "../../api"

{
  const text = "Hello\nWorld"
  const document = parseDocument(text)

  assertDocument(document, [
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
