import { tester } from "../../api"

{

  // NOTE A single self-closing tag will be parsed as `HtmlBlock`.

  const text = `

<x />

`
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    { kind: "HtmlBlock", text: "<x />" },
  ])
}

{
  const text = `

a <x /> b

`
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
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
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
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

{
  const text = `

<x> hi </x>

`
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        { kind: "HtmlTag", text: "<x>" },
        { kind: "Text", text: " hi " },
        { kind: "HtmlTag", text: "</x>" },
      ],
    },
  ])
}
