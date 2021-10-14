import app from "../../app"

{
  const text = `

<x-card />

`
  const document = app.tester.parser.parseDocument(text)

  app.tester.assertDocument(document, [
    {
      kind: "HtmlBlock",
      text: text.trim(),
    },
  ])
}

{
  const text = `\
<x-card>
  Hello world!
</x-card>
`

  const document = app.tester.parser.parseDocument(text)

  app.tester.assertDocument(document, [
    {
      kind: "HtmlBlock",
      text: text.trim(),
    },
  ])
}
