import app from "../app"
import { Nodes } from "../index"
import * as ut from "../ut"

class Trivial {
  list: Nodes.List

  constructor(list: Nodes.List) {
    this.list = list
  }
}

const parser = app.createParser().customList({
  customKind: "Trivial",
  recognize: (list) => {
    const firstItem = list.children[0]
    if (firstItem === undefined) return false
    return firstItem.format().trim().startsWith("- [xmind]")
  },
  parse: (list) => new Trivial(list),
})

{
  const text = `\
# Not XMind

- Sept 2021
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

# XMind

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

  ut.assertEqual(
    document.children.map((child) => child.kind),
    ["Headline", "BulletList", "Headline", "CustomList"]
  )
}
