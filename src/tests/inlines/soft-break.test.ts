import { tester } from "../../api"

{
  const text = "Hello\nWorld"
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", text: "Hello" },
        { kind: "SoftLineBreak" },
        { kind: "Text", text: "World" },
      ],
    },
  ])
}
