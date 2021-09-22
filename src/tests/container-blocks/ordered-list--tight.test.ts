import { parseDocument, assertDocument } from "../../api"

{
  const text = `\
A tight ordered list:

6. a
7. b
100. c
`

  const document = parseDocument(text)

  assertDocument(document, [
    {
      kind: "Paragraph",
      children: [{ kind: "Text", value: "A tight ordered list:" }],
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
            { kind: "Paragraph", children: [{ kind: "Text", value: "a" }] },
          ],
        },
        {
          kind: "OrderedListItem",
          number: 7,
          delimiter: ".",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", value: "b" }] },
          ],
        },
        {
          kind: "OrderedListItem",
          number: 100,
          delimiter: ".",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", value: "c" }] },
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

  const document = parseDocument(text)

  assertDocument(document, [
    {
      kind: "Paragraph",
      children: [{ kind: "Text", value: "A tight ordered list:" }],
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
            { kind: "Paragraph", children: [{ kind: "Text", value: "a" }] },
          ],
        },
        {
          kind: "OrderedListItem",
          number: 7,
          delimiter: ")",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", value: "b" }] },
          ],
        },
        {
          kind: "OrderedListItem",
          number: 100,
          delimiter: ")",
          children: [
            { kind: "Paragraph", children: [{ kind: "Text", value: "c" }] },
          ],
        },
      ],
    },
  ])
}
