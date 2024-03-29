import app from "../../app"

{
  const text = '![example image](https://example.com "example title")'
  const document = app.createParser().parseDocument(text)

  document.assertChildrenJson([
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
