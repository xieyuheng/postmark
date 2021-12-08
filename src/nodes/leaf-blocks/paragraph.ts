import { Node, NodeVisitor, Span } from "../../node"
import * as Nodes from "../../nodes"

export class Paragraph extends Nodes.LeafBlock {
  kind = "Paragraph"

  span: Span
  children: Array<Node>

  constructor(opts: { children: Array<Node>; span: Span }) {
    super()
    this.span = opts.span
    this.children = opts.children
  }

  shallowCopy(): Paragraph {
    return new Paragraph(this)
  }

  json() {
    return {
      kind: this.kind,
      children: this.children.map((child) => child.json()),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onParagraph(this)
  }

  format(): string {
    return this.children.map((child) => child.format()).join("")
  }
}
