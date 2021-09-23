import { parseDocument, assertDocument } from "../../api"

{
  const text = "Hello *world*"
  const document = parseDocument(text)

  assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", text: "Hello " },
        {
          kind: "Emphasis",
          children: [{ kind: "Text", text: "world" }],
        },
      ],
    },
  ])
}
