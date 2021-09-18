import { parseDocument, assertDocument } from "../api"

{
  const strong = "Hi **there**"
  const node = parseDocument(strong)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", value: "Hi " },
        {
          kind: "Strong",
          children: [{ kind: "Text", value: "there" }],
        },
      ],
    },
  ])
}
