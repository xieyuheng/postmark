import { tester } from "../../api"

{
  const text = `\
# headline 1
## headline 2
### headline 3
`

  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "Headline",
      level: 1,
      children: [{ kind: "Text", text: "headline 1" }],
    },
    {
      kind: "Headline",
      level: 2,
      children: [{ kind: "Text", text: "headline 2" }],
    },
    {
      kind: "Headline",
      level: 3,
      children: [{ kind: "Text", text: "headline 3" }],
    },
  ])
}

{
  const text = `\
headline 1
==========

headline 2
----------
`

  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "Headline",
      level: 1,
      children: [{ kind: "Text", text: "headline 1" }],
    },
    {
      kind: "Headline",
      level: 2,
      children: [{ kind: "Text", text: "headline 2" }],
    },
  ])
}
