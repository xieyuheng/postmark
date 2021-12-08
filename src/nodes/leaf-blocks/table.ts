import { Node, NodeVisitor, Span } from "../../node"
import * as Nodes from "../../nodes"

type Alignment = null | "left" | "right" | "center"

export class Table extends Nodes.LeafBlock {
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

  get width(): number {
    return this.alignments.length
  }

  // NOTE Not including the header.
  get height(): number {
    return Math.floor(this.children.length / this.width) - 1
  }

  get header(): Array<Array<Node>> {
    const wrapped = this.children.slice(0, this.width)
    return wrapped.map((paragraph) => paragraph.children)
  }

  get rows(): Array<Array<Array<Node>>> {
    const body = this.children.slice(this.width)

    const results: Array<Array<Array<Node>>> = []
    for (let i = 0; i < this.height; i++) {
      const start = i * this.width
      const wrapped = body.slice(start, start + this.width)
      results.push(wrapped.map((paragraph) => paragraph.children))
    }

    return results
  }

  shallowCopy(): Table {
    return new Table(this)
  }

  json() {
    return {
      kind: this.kind,
      alignments: this.alignments,
      header: this.header.map((nodes) => nodes.map((node) => node.json())),
      rows: this.rows.map((row) =>
        row.map((nodes) => nodes.map((node) => node.json()))
      ),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onTable(this)
  }

  format(): string {
    return this.raw
  }
}
