import { parseDocument, assertDocument } from "../../api"

{
  const text = `

a <x /> b

`
  const document = parseDocument(text)

  assertDocument(document, [
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
  const text = `

a <x> hi </x> b

`
  const document = parseDocument(text)

  assertDocument(document, [
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
