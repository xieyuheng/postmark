import { Node } from "../node"
import { NodeVisitor } from "../node"
import * as Nodes from "../nodes"
import Marked from "marked"

export class TablePostprocessor extends NodeVisitor<Node> {
  constructor() {
    super()
  }

  default(node: Node): Node {
    const newNode = node.shallowCopy()
    newNode.children = newNode.children.map((child) => child.accept(this))
    return newNode
  }

  onParagraph(node: Nodes.Paragraph): Node {
    const text = node.format()
    const tokens = Marked.lexer(text)
    if (tokens.length === 1 && tokens[0].type === "table") {
      const markedToken = tokens[0]
      console.dir(markedToken, { depth: null })
      return node
    } else {
      return node
    }
  }
}
