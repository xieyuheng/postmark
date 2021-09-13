import { Parser, HtmlRenderer, Node } from "commonmark"

const reader = new Parser()

const parsed = reader.parse(`
Hello *world*

Hi **there**


Hi **there**

- Hi **there**

`)

console.dir(present_node(parsed), { depth: null })

// for (const node of node_children(parsed)) {
//   console.log(present_node(node))
// }

// const writer = new HtmlRenderer()
// const result = writer.render(parsed)
// console.log(result)

function node_children(node: Node): Array<Node> {
  const children = []

  let child = node.firstChild

  while (child) {
    children.push(child)
    child = child.next
  }

  return children
}

function present_node(node: Node): any {
  return {
    type: node.type,
    literal: node.literal,
    sourcepos: node.sourcepos,
    children: node_children(node).map(present_node),
  }
}
