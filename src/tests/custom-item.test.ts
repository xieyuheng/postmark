import app from "../app"

const parser = app.createParser().customItem({
  customKind: "XMind",
  recognize: (item) =>
    item.start.some((tag) => tag.name.toLowerCase() === "xmind"),
  parse: (item) => null,
})

{
  const text = `\
- [xmind] Sept 2021
  - Programmable Mind Mapping
  - PNG to XMind
  - Inspire Me
  - Article Reader
  - M3
  - Styles
    - Smart Color Theme [B]
    - Loop Branch Color [S1, B]
    - Hand-draw Style [B, S1]
    - Live Background [S1]
    - [B] Snowbrush (Apple)
    - [S1, 1] Chips
      - After Apple
  - YoungMind [1]
`

  const document = parser.parseDocument(text)

  document.assertChildrenJson([
    {
      kind: "List",
      tight: true,
      children: [
        {
          kind: "CustomItem",
          customKind: "XMind",
          taggedItem: {
            start: ["xmind"],
            content: "Sept 2021",
            children: [
              { content: "Programmable Mind Mapping" },
              { content: "PNG to XMind" },
              { content: "Inspire Me" },
              { content: "Article Reader" },
              { content: "M3" },
              {
                content: "Styles",
                children: [
                  { content: "Smart Color Theme", end: ["B"] },
                  { content: "Loop Branch Color", end: ["S1", "B"] },
                  { content: "Hand-draw Style", end: ["B", "S1"] },
                  { content: "Live Background", end: ["S1"] },
                  { start: ["B"], content: "Snowbrush (Apple)" },
                  {
                    start: ["S1", "1"],
                    content: "Chips",
                    children: [{ content: "After Apple" }],
                  },
                ],
              },
              { content: "YoungMind", end: ["1"] },
            ],
          },
        },
      ],
    },
  ])
}
