import app from "../../app"

{
  const text = "\n---\n"
  const document = app.tester.parser.parseDocument(text)

  app.tester.assertDocument(document, [
    {
      kind: "ThematicBreak",
    },
  ])
}
