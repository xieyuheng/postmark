import app from "../../app"

{
  const text = "Hello\nWorld"
  const document = app.tester.parser.parseDocument(text)

  app.tester.assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", text: "Hello" },
        { kind: "SoftLineBreak" },
        { kind: "Text", text: "World" },
      ],
    },
  ])
}
