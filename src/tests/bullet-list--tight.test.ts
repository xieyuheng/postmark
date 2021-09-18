import { parseDocument, assertDocument } from "../api"

{
  const tightBulletList = `\
A tight list:
- a
- b
- c
`

  const node = parseDocument(tightBulletList)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [{ kind: "Text", value: "A tight list:" }],
    },
    {
      kind: "BulletList",
      tight: true,
      children: [
        {
          kind: "ListItem",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", value: "a" }] },
          ],
        },
        {
          kind: "ListItem",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", value: "b" }] },
          ],
        },
        {
          kind: "ListItem",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", value: "c" }] },
          ],
        },
      ],
    },
  ])
}