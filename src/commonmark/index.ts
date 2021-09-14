import { Parser, HtmlRenderer, Node } from "commonmark"

const reader = new Parser()

function renderCodeBlock(info: string, text: string): string {
  let s = ""
  s += "``` " + info + "\n"
  s += text
  s += "```" + "\n"
  return s
}

const sisuo = renderCodeBlock(
  "sisuo",
  `\
环节:
  标题: 简单的测试
  标签:
  - 测试标签1
  - 测试标签2
  - 测试标签3
  卡组:
  - cards-1
`
)
const parsed = reader.parse(`
Hello *world*

Hi **there**

---

- a
- b
- c

${sisuo}

`)

console.dir(presentNode(parsed), { depth: null })

// for (const node of nodeChildren(parsed)) {
//   console.log(presentNode(node))
// }

// const writer = new HtmlRenderer()
// const result = writer.render(parsed)
// console.log(result)

function nodeChildren(node: Node): Array<Node> {
  const children = []

  let child = node.firstChild

  while (child) {
    children.push(child)
    child = child.next
  }

  return children
}

function presentNode(node: Node): any {
  return {
    type: node.type,
    literal: node.literal,
    isContainer: node.isContainer,
    sourcepos: node.sourcepos,
    children: nodeChildren(node).map(presentNode),
  }
}
