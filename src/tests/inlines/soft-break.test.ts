import { parseDocument, assertDocument } from "../../api"

{
  const text = "Hello\nWorld"
  const document = parseDocument(text)

  assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", text: "Hello" },
        { kind: "SoftLineBreak" },
        { kind: "Text", text: "World" },
      ],
    },
  ])
}
