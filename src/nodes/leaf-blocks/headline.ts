import { LeafBlock, Node, Span } from "../../node"

export class Headline extends LeafBlock {
  kind = "Headline"

  span: Span
  level: number
  children: Array<Node>

  constructor(opts: { span: Span; level: number; children: Array<Node> }) {
    super()
    this.span = opts.span
    this.level = opts.level
    this.children = opts.children
  }

  json() {
    return {
      kind: this.kind,
      level: this.level,
      children: this.children.map((child) => child.json()),
    }
  }
}
