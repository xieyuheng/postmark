import app from "../../app"

{
  const text = `\
A loose list:
- a
  a
  a

- b

- c
`

  const document = app.tester.parser.parseDocument(text)

  app.tester.assertDocument(document, [
    {
      kind: "Paragraph",
      children: [{ kind: "Text", text: "A loose list:" }],
    },
    {
      kind: "List",
      tight: false,
      children: [
        {
          kind: "Item",
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
          kind: "Item",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", text: "b" }] },
          ],
        },
        {
          kind: "Item",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", text: "c" }] },
          ],
        },
      ],
    },
  ])
}
