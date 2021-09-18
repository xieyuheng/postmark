import { parseDocument, assertDocument } from "../api"

{
  const image = '![example image](https://example.com "example title")'
  const node = parseDocument(image)

  assertDocument(node, [
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
