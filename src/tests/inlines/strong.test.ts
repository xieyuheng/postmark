import { parseDocument, assertDocument } from "../../api"

{
  const text = "Hi **there**"
  const document = parseDocument(text)

  assertDocument(document, [
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
