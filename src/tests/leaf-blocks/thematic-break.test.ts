import { parseDocument, assertDocument } from "../../api"

{
  const text = "\n---\n"
  const document = parseDocument(text)

  assertDocument(document, [
    {
      kind: "ThematicBreak",
    },
  ])
}
