import { parseDocument, assertDocument } from "../../api"

{
  const text = `\
A tight list:
- a
- b
- c
`

  const document = parseDocument(text)

  assertDocument(document, [
    {
      kind: "Paragraph",
      children: [{ kind: "Text", value: "A tight list:" }],
    },
    {
      kind: "BulletList",
      tight: true,
      children: [
        {
          kind: "BulletListItem",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", value: "a" }] },
          ],
        },
        {
          kind: "BulletListItem",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", value: "b" }] },
          ],
        },
        {
          kind: "BulletListItem",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", value: "c" }] },
          ],
        },
      ],
    },
  ])
}
