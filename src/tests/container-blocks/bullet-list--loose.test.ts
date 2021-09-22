import { parseDocument, assertDocument } from "../../api"

{
  const text = `\
A loose list:
- a
  a
  a

- b

- c
`

  const document = parseDocument(text)

  assertDocument(document, [
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
