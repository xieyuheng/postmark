import app from "../app"

const parser = app.createParser().customItem({
  customKind: "Hello",
  recognize: (item) =>
    item.start.some((tag) => tag.name.toLowerCase() === "hello"),
  build: (item) => null,
})

{
  const text = `\
- [hello] Hiya ~
  - A
  - B
  - C [B]
  - D [S]
  - E [S, B]
  - F [B, S]
  - G [S]
  - [B] X
  - [S, 1] Y
  - Z [1]
`

  const document = parser.parseDocument(text)

  document.assertChildrenJson([
    {
      kind: "List",
      tight: true,
      children: [
        {
          kind: "CustomItem",
          customKind: "Hello",
          taggedItem: {
            start: ["hello"],
            content: "Hiya ~",
            children: [
              { content: "A" },
              { content: "B" },
              { content: "C", end: ["B"] },
              { content: "D", end: ["S"] },
              { content: "E", end: ["S", "B"] },
              { content: "F", end: ["B", "S"] },
              { content: "G", end: ["S"] },
              { start: ["B"], content: "X" },
              { start: ["S", "1"], content: "Y" },
              { content: "Z", end: ["1"] },
            ],
          },
        },
      ],
    },
  ])
}
