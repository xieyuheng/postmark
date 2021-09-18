import { parseDocument, assertDocument } from "../api"

{
  const emphasize = "Hello *world*"
  const node = parseDocument(emphasize)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", value: "Hello " },
        {
          kind: "Emphasize",
          children: [{ kind: "Text", value: "world" }],
        },
      ],
    },
  ])
}
