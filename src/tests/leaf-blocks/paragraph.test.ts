import app from "../../app"

{
  const text = `\
A, B, C!

A! B! C!
`

  const document = app.createParser().parseDocument(text)

  document.assertChildrenJson([
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", text: "A, B, C" },
        // NOTE Be careful about this "!"
        { kind: "Text", text: "!" },
      ],
    },
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", text: "A" },
        { kind: "Text", text: "!" },
        { kind: "Text", text: " B" },
        { kind: "Text", text: "!" },
        { kind: "Text", text: " C" },
        { kind: "Text", text: "!" },
      ],
    },
  ])
}
