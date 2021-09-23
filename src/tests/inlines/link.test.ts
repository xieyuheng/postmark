import { parseDocument, assertDocument } from "../../api"

{
  const text = '[example link](https://example.com "example title")'
  const document = parseDocument(text)

  assertDocument(document, [
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
  const document = parseDocument(text)

  assertDocument(document, [
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
  const document = parseDocument(text)

  assertDocument(document, [
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
