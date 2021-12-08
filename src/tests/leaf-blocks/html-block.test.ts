import app from "../../app"

{
  const text = `

<x-card />

`
  const document = app.createParser().parseDocument(text)

  document.assertChildrenJson([
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

  const document = app.createParser().parseDocument(text)

  document.assertChildrenJson([
    {
      kind: "HtmlBlock",
      text: text.trim(),
    },
  ])
}
