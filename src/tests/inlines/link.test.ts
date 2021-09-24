import { tester } from "../../api"

{
  const text = '[example link](https://example.com "example title")'
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        {
          kind: "Link",
          title: "example title",
          href: "https://example.com",
          children: [{ kind: "Text", text: "example link" }],
        },
      ],
    },
  ])
}

{
  const text = `\
[example link][]

[example link]: https://example.com "example title"
`
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        {
          kind: "Link",
          title: "example title",
          href: "https://example.com",
          children: [{ kind: "Text", text: "example link" }],
        },
      ],
    },
  ])
}

{
  const text = `<https://example.com>`
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        {
          kind: "Link",
          title: "",
          href: "https://example.com",
          children: [{ kind: "Text", text: "https://example.com" }],
        },
      ],
    },
  ])
}
