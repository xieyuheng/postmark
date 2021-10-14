import app from "../../app"

{
  const text = "Hi **there**"
  const document = app.tester.parser.parseDocument(text)

  app.tester.assertDocument(document, [
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
