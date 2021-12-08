import app from "../../app"

{
  const text = `\
A tight ordered list:

6. a
7. b
100. c
`

  const document = app.tester.parser.parseDocument(text)

  app.tester.assertDocument(document, [
    {
      kind: "Paragraph",
      children: [{ kind: "Text", text: "A tight ordered list:" }],
    },
    {
      kind: "OrderedList",
      tight: true,
      start: 6,
      delimiter: ".",
      children: [
        {
          kind: "OrderedItem",
          number: 6,
          delimiter: ".",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", text: "a" }] },
          ],
        },
        {
          kind: "OrderedItem",
          number: 7,
          delimiter: ".",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", text: "b" }] },
          ],
        },
        {
          kind: "OrderedItem",
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

{
  const text = `\
A tight ordered list:

6) a
7) b
100) c
`

  const document = app.tester.parser.parseDocument(text)

  app.tester.assertDocument(document, [
    {
      kind: "Paragraph",
      children: [{ kind: "Text", text: "A tight ordered list:" }],
    },
    {
      kind: "OrderedList",
      tight: true,
      start: 6,
      delimiter: ")",
      children: [
        {
          kind: "OrderedItem",
          number: 6,
          delimiter: ")",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", text: "a" }] },
          ],
        },
        {
          kind: "OrderedItem",
          number: 7,
          delimiter: ")",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", text: "b" }] },
          ],
        },
        {
          kind: "OrderedItem",
          number: 100,
          delimiter: ")",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", text: "c" }] },
          ],
        },
      ],
    },
  ])
}
