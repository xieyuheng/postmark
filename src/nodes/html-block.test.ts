import { parseDocument, assertDocument } from "../api"

{
  const htmlBlock = `

<x-card />

`
  const node = parseDocument(htmlBlock)

  assertDocument(node, [
    {
      kind: "HtmlBlock",
      value: htmlBlock.trim(),
    },
  ])
}

{
  const htmlBlock = `\
<x-card>
  Hiya
</x-card>
`

  const node = parseDocument(htmlBlock)

  assertDocument(node, [
    {
      kind: "HtmlBlock",
      value: htmlBlock.trim(),
    },
  ])
}
