import { parseDocument, assertDocument } from "../../api"

{
  const text = "Hello  \nWorld"
  const document = parseDocument(text)

  assertDocument(document, [
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
