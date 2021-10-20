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
          // NOTE We use `Nodes.Paragraph` as a wrapper.
          // TODO When using the `this.parser.parseNodes`,
          //   the resulting `span` is wrong.
          new Nodes.Paragraph({
            children: this.parser.parseNodes(text),
            span: node.span,
          })
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
