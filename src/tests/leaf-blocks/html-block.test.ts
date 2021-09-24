import { tester } from "../../api"

{
  const text = `

<x-card />

`
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
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

  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "HtmlBlock",
      text: text.trim(),
    },
  ])
}
