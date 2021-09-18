import { parseDocument, assertDocument } from "../api"

{
  const headings = `\
# heading 1
## heading 2
### heading 3
`

  const node = parseDocument(headings)

  assertDocument(node, [
    {
      kind: "Heading",
      level: 1,
      children: [{ kind: "Text", value: "heading 1" }],
    },
    {
      kind: "Heading",
      level: 2,
      children: [{ kind: "Text", value: "heading 2" }],
    },
    {
      kind: "Heading",
      level: 3,
      children: [{ kind: "Text", value: "heading 3" }],
    },
  ])
}
