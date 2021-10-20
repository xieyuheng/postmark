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

  // NOTE We calculate `header` and `rows` from `children` and `alignments`.
  //   note that `children` are wrapped in `Paragraph`.
  // NOTE we view `children` as the source of truth,
  //   because we need to use this constraint in some `NodeVisitor`.

  get header(): Array<Array<Node>> {
    return this.children
      .slice(0, this.alignments.length)
      .map((paragraph) => paragraph.children)
  }

  shallowCopy(): Table {
    return new Table(this)
  }

  json() {
    return {
      kind: this.kind,
      alignments: this.alignments,
      header: this.header.map((nodes) => nodes.map((node) => node.json())),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onTable ? visitor.onTable(this) : visitor.default(this)
  }

  format(): string {
    return this.raw
  }
}
