import { parseDocument, assertDocument } from "../../api"

{
  const text = '![example image](https://example.com "example title")'
  const document = parseDocument(text)

  assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        {
          kind: "Image",
          title: "example title",
          href: "https://example.com",
          children: [{ kind: "Text", value: "example image" }],
        },
      ],
    },
  ])
}
