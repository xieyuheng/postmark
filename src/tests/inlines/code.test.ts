import { tester } from "../../api"

{
  const text = "`console.log('Hello')`"
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        {
          kind: "Code",
          text: "console.log('Hello')",
        },
      ],
    },
  ])
}
