import { parseDocument, assertDocument } from "../../api"

{
  const text = `\
A loose ordered list:

6. a
   a
   a

7. b

100. c
`

  const document = parseDocument(text)

  assertDocument(document, [
    {
      kind: "Paragraph",
      children: [{ kind: "Text", value: "A loose ordered list:" }],
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
