import { tester } from "../../api"

{
  const text = '![example image](https://example.com "example title")'
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "Paragraph",
      children: [
        {
          kind: "Image",
          title: "example title",
          href: "https://example.com",
          children: [{ kind: "Text", text: "example image" }],
        },
      ],
    },
  ])
}
