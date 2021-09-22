import { parseDocument, assertDocument } from "../../api"

{
  const looseBulletList = `\
A loose list:
- a
  a
  a

- b

- c
`

  const node = parseDocument(looseBulletList)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [{ kind: "Text", value: "A loose list:" }],
    },
    {
      kind: "BulletList",
      tight: false,
      children: [
        {
          kind: "BulletListItem",
          children: [
            {
              kind: "Paragraph",
              children: [
                { kind: "Text", value: "a" },
                { kind: "SoftLineBreak" },
                { kind: "Text", value: "a" },
                { kind: "SoftLineBreak" },
                { kind: "Text", value: "a" },
              ],
            },
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
