import { parseDocument, assertDocument } from "../../api"

{
  const emphasis = "Hello *world*"
  const node = parseDocument(emphasis)

  assertDocument(node, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", value: "Hello " },
        {
          kind: "Emphasis",
          children: [{ kind: "Text", value: "world" }],
        },
      ],
    },
  ])
}
