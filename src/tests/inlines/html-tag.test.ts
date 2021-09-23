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
        { kind: "Text", text: "a " },
        { kind: "HtmlTag", text: "<x />" },
        { kind: "Text", text: " b" },
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
        { kind: "Text", text: "a " },
        { kind: "HtmlTag", text: "<x>" },
        { kind: "Text", text: " hi " },
        { kind: "HtmlTag", text: "</x>" },
        { kind: "Text", text: " b" },
      ],
    },
  ])
}
