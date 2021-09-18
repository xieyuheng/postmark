import { parseDocument, assertDocument } from "../api"

{
  const code = "`console.log('Hello')`"
  const node = parseDocument(code)

  assertDocument(node, [
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
