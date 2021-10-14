import app from "../../app"

{
  const text = `\
A loose ordered list:

6. a
   a
   a

7. b

100. c
`

  const document = app.tester.parser.parseDocument(text)

  app.tester.assertDocument(document, [
    {
      kind: "Paragraph",
      children: [{ kind: "Text", text: "A loose ordered list:" }],
    },
    {
      kind: "OrderedList",
      tight: false,
      start: 6,
      delimiter: ".",
      children: [
        {
          kind: "OrderedListItem",
          number: 6,
          delimiter: ".",
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
          kind: "OrderedListItem",
          number: 7,
          delimiter: ".",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", text: "b" }] },
          ],
        },
        {
          kind: "OrderedListItem",
          number: 100,
          delimiter: ".",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", text: "c" }] },
          ],
        },
      ],
    },
  ])
}
