import { LeafBlock, Node, Span } from "../../node"
import { NodeVisitor } from "../../node-visitor"

export class Paragraph extends LeafBlock {
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
    return visitor.onParagraph
      ? visitor.onParagraph(this)
      : visitor.default(this)
  }

  format(): string {
    return this.children.map((child) => child.format()).join("")
  }
}
