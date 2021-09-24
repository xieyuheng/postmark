import { tester } from "../../api"

{
  const text = `\
A tight ordered list:

6. a
7. b
100. c
`

  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
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
          kind: "OrderedListItem",
          number: 6,
          delimiter: ".",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", text: "a" }] },
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

{
  const text = `\
A tight ordered list:

6) a
7) b
100) c
`

  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
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
          kind: "OrderedListItem",
          number: 6,
          delimiter: ")",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", text: "a" }] },
          ],
        },
        {
          kind: "OrderedListItem",
          number: 7,
          delimiter: ")",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", text: "b" }] },
          ],
        },
        {
          kind: "OrderedListItem",
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
