import { tester } from "../../api"

{
  const text = "Hello *world*"
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", text: "Hello " },
        {
          kind: "Emphasis",
          children: [{ kind: "Text", text: "world" }],
        },
      ],
    },
  ])
}
