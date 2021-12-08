import app from "../app"

const parser = app.createParser().customItem({
  customKind: "Trivial",
  recognize: (taggedItem) => {
    console.log(taggedItem)
    return true
  },
  parse: (taggedItem) => null,
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

  console.log(
    document.children.flatMap((child) =>
      child.children.map((child) => child.kind)
    )
  )
}
