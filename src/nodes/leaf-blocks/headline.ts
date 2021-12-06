import { Node, Span } from "../../node"
import { NodeVisitor } from "../../node-visitor"
import * as Nodes from "../../nodes"

export class Headline extends Nodes.LeafBlock {
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

  shallowCopy(): Headline {
    return new Headline(this)
  }

  json() {
    return {
      kind: this.kind,
      level: this.level,
      children: this.children.map((child) => child.json()),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onHeadline(this)
  }

  format(): string {
    const head = "#".repeat(this.level)
    const body = this.children.map((child) => child.format()).join("")
    return `${head} ${body}`
  }
}
