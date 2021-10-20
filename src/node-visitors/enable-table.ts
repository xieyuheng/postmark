import { Node } from "../node"
import { NodeVisitor } from "../node-visitor"
import * as Nodes from "../nodes"
import { Parser } from "../parser"
import Marked from "marked"

export class EnableTable extends NodeVisitor<Node> {
  constructor(opts: { parser: Parser }) {
    super({ parser: opts.parser })
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

      const alignments = markedToken.align.map((x) => (x === null ? "none" : x))

      const children = [
        ...markedToken.header,
        ...markedToken.rows.flatMap((row) => row),
      ].map(
        ({ text }) =>
          // NOTE When using the `this.parser.parseNodes`,
          // - the result will be wrapped in the first `Paragraph` of `nodes`.
          // - the result will be inline node,
          //   thus we do not need to worry about wrong `span`,
          //   for inline node does not have `span`.
          this.parser.parseNodes(text)[0]
      )

      return new Nodes.Table({
        span: node.span,
        children,
        alignments,
        raw: markedToken.raw,
      })
    } else {
      return node
    }
  }
}
