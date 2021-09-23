import { parseDocument, assertDocument } from "../../api"

{
  const text = `

<x-card />

`
  const document = parseDocument(text)

  assertDocument(document, [
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

  const document = parseDocument(text)

  assertDocument(document, [
    {
      kind: "HtmlBlock",
      text: text.trim(),
    },
  ])
}
