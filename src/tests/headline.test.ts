import { parseDocument, assertDocument } from "../api"

{
  const headlines = `\
# headline 1
## headline 2
### headline 3
`

  const node = parseDocument(headlines)

  assertDocument(node, [
    {
      kind: "Headline",
      level: 1,
      children: [{ kind: "Text", value: "headline 1" }],
    },
    {
      kind: "Headline",
      level: 2,
      children: [{ kind: "Text", value: "headline 2" }],
    },
    {
      kind: "Headline",
      level: 3,
      children: [{ kind: "Text", value: "headline 3" }],
    },
  ])
}
