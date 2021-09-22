import { parseDocument, assertDocument } from "../../api"

{
  const text = `\
> Make the change easy, then make the easy change.
>
> -- Kent Beck
`

  const document = parseDocument(text)

  assertDocument(document, [
    {
      kind: "BlockQuote",
      children: [
        {
          kind: "Paragraph",
          children: [
            {
              kind: "Text",
              value: "Make the change easy, then make the easy change.",
            },
          ],
        },
        {
          kind: "Paragraph",
          children: [{ kind: "Text", value: "-- Kent Beck" }],
        },
      ],
    },
  ])
}
