import { parseDocument, assertDocument } from "../api"

{
  const link = '[example link](https://example.com "example title")'
  const node = parseDocument(link)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        {
          kind: "Link",
          title: "example title",
          href: "https://example.com",
          children: [{ kind: "Text", value: "example link" }],
        },
      ],
    },
  ])
}

{
  const link = `\
[example link][]

[example link]: https://example.com "example title"
`
  const node = parseDocument(link)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        {
          kind: "Link",
          title: "example title",
          href: "https://example.com",
          children: [{ kind: "Text", value: "example link" }],
        },
      ],
    },
  ])
}
