import app from "../../app"

{
  const text = "Hello *world*"
  const document = app.tester.parser.parseDocument(text)

  app.tester.assertDocument(document, [
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
