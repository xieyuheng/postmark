import { parseDocument, assertDocument } from "../api"

{
  const htmlInline = `

a <x /> b

`
  const node = parseDocument(htmlInline)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", value: "a " },
        { kind: "HtmlInline", value: "<x />" },
        { kind: "Text", value: " b" },
      ],
    },
  ])
}
