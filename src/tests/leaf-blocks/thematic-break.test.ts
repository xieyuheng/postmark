import { parseDocument, assertDocument } from "../../api"

{
  const thematicBreak = "\n---\n"
  const node = parseDocument(thematicBreak)

  assertDocument(node, [
    {
      kind: "ThematicBreak",
    },
  ])
}
