import { tester } from "../../api"

{
  const text = `\
> Make the change easy, then make the easy change.
>
> -- Kent Beck
`

  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "BlockQuote",
      children: [
        {
          kind: "Paragraph",
          children: [
            {
              kind: "Text",
              text: "Make the change easy, then make the easy change.",
            },
          ],
        },
        {
          kind: "Paragraph",
          children: [{ kind: "Text", text: "-- Kent Beck" }],
        },
      ],
    },
  ])
}
