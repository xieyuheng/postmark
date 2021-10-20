import { LeafBlock, Node, Span } from "../../node"
import { NodeVisitor } from "../../node-visitor"

type Alignment = "none" | "left" | "right" | "center"

export class Table extends LeafBlock {
  kind = "Table"

  span: Span
  children: Array<Node>
  alignments: Array<Alignment>
  raw: string

  constructor(opts: {
    children: Array<Node>
    span: Span
    alignments: Array<Alignment>
    raw: string
  }) {
    super()
    this.span = opts.span
    this.children = opts.children
    this.alignments = opts.alignments
    this.raw = opts.raw
  }

  shallowCopy(): Table {
    return new Table(this)
  }

  json() {
    return {
      kind: this.kind,
      children: this.children.map((child) => child.json()),
      alignments: this.alignments,
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onTable ? visitor.onTable(this) : visitor.default(this)
  }

  format(): string {
    return this.raw
  }
}
