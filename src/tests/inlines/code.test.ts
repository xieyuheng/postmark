import { parseDocument, assertDocument } from "../../api"

{
  const text = "`console.log('Hello')`"
  const document = parseDocument(text)

  assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        {
          kind: "Code",
          value: "console.log('Hello')",
        },
      ],
    },
  ])
}
