import { parseDocument, assertDocument } from "../../api"

{
  const text = "Hello *world*"
  const document = parseDocument(text)

  assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", value: "Hello " },
        {
          kind: "Emphasis",
          children: [{ kind: "Text", value: "world" }],
        },
      ],
    },
  ])
}
