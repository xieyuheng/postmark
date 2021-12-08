import app from "../../app"

{
  const text = "\n---\n"
  const document = app.createParser().parseDocument(text)

  document.assertChildrenJson([
    {
      kind: "ThematicBreak",
    },
  ])
}
