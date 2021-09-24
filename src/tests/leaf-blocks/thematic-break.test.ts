import { tester } from "../../api"

{
  const text = "\n---\n"
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "ThematicBreak",
    },
  ])
}
