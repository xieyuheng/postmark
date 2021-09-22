import { parseDocument, assertDocument } from "../../api"

{
  const blockQuote = `\
> Make the change easy, then make the easy change.
>
> -- Kent Beck
`

  const node = parseDocument(blockQuote)

  assertDocument(node, [
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
