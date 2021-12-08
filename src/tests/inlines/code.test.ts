import app from "../../app"

{
  const text = "`console.log('Hello')`"
  const document = app.createParser().parseDocument(text)

  document.assertChildrenJson([
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
