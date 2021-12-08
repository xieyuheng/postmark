import app from "../app"

const parser = app.createParser().customItem({
  customKind: "Trivial",
  recognize: (taggedItem) =>
    Boolean(taggedItem.start.find((tag) => tag.name.toLowerCase() === "xmind")),
  parse: (taggedItem) => null,
})

{
  const text = `\
- [xmind] Hi
  - A
  - B
  - C
    - X [B]
    - Y [S, B]
    - Z [B, S]
    - [B] Boundary
    - [S, 1] Summary
      - There
  - D [1]
`

  //   const text = `\
  // - [xmind] Sept 2021
  //   - Programmable Mind Mapping
  //   - PNG to XMind
  //   - Inspire Me
  //   - Article Reader
  //   - M3
  //   - Styles
  //     - Smart Color Theme [B]
  //     - Loop Branch Color [S1, B]
  //     - Hand-draw Style [B, S1]
  //     - Live Background [S1]
  //     - [B] Snowbrush (Apple)
  //     - [S1, 1] Chips
  //       - After Apple
  //   - YoungMind [1]
  // `

  const document = parser.parseDocument(text)

  for (const child of document.children) {
    for (const node of child.children) {
      const taggedItem = (node as any).taggedItem
      console.log(taggedItem.content.text)
      console.log(taggedItem.content.fullText)
      taggedItem.children.forEach((taggedItem: any) => {
        console.log(taggedItem.content.fullText)
        taggedItem.children.forEach((taggedItem: any) => {
          console.log(taggedItem.start, taggedItem.end)
          console.log(taggedItem.content.fullText)
        })
      })
    }
  }
}
