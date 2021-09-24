import { tester } from "../../api"

{
  const text = "Hi **there**"
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", text: "Hi " },
        {
          kind: "Strong",
          children: [{ kind: "Text", text: "there" }],
        },
      ],
    },
  ])
}
