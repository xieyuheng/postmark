import app from "../app"

const parser = app.createParser().customItem({
  customKind: "Trivial",
  recognize: (taggedItem) =>
    Boolean(taggedItem.start.find((tag) => tag.name.toLowerCase() === "xmind")),
  parse: (taggedItem) => null,
})

{
  const text = `\
- [xmind] Hello World!
  - A [B, S]
  - B [S]
  - [B] Boundary
  - [S, 1] Summary
  - W [1]
`
  const document = parser.parseDocument(text)
  document.assertChildrenJson([
    {
      kind: "List",
      tight: true,
      children: [
        {
          kind: "CustomItem",
          customKind: "Trivial",
          start: ["xmind"],
          content: "Hello World!",
          children: [
            { content: "A", end: ["B", "S"] },
            { content: "B", end: ["S"] },
            { start: ["B"], content: "Boundary" },
            { start: ["S", "1"], content: "Summary" },
            { content: "W", end: ["1"] },
          ],
        },
      ],
    },
  ])
}
