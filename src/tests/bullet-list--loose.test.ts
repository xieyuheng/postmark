import { parseDocument, assertDocument } from "../api"

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
          kind: "ListItem",
          children: [
            {
              kind: "Paragraph",
              children: [
                { kind: "Text", value: "a" },
                { kind: "SoftBreak" },
                { kind: "Text", value: "a" },
                { kind: "SoftBreak" },
                { kind: "Text", value: "a" },
              ],
            },
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
