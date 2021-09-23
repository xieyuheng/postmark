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
      children: [{ kind: "Text", text: "A loose list:" }],
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
                { kind: "Text", text: "a" },
                { kind: "SoftLineBreak" },
                { kind: "Text", text: "a" },
                { kind: "SoftLineBreak" },
                { kind: "Text", text: "a" },
              ],
            },
          ],
        },
        {
          kind: "BulletListItem",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", text: "b" }] },
          ],
        },
        {
          kind: "BulletListItem",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", text: "c" }] },
          ],
        },
      ],
    },
  ])
}
