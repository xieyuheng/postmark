import { LeafBlock, Node, Span } from "../../node"

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
}
