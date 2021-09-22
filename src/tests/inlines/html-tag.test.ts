import { parseDocument, assertDocument } from "../../api"

{
  const htmlTag = `

a <x /> b

`
  const node = parseDocument(htmlTag)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", value: "a " },
        { kind: "HtmlTag", value: "<x />" },
        { kind: "Text", value: " b" },
      ],
    },
  ])
}

{
  const htmlTag = `

a <x> hi </x> b

`
  const node = parseDocument(htmlTag)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", value: "a " },
        { kind: "HtmlTag", value: "<x>" },
        { kind: "Text", value: " hi " },
        { kind: "HtmlTag", value: "</x>" },
        { kind: "Text", value: " b" },
      ],
    },
  ])
}
