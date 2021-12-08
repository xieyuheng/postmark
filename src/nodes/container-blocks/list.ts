import { NodeVisitor, Span } from "../../node"
import * as Nodes from "../../nodes"

export class List extends Nodes.ContainerBlock {
  kind = "List"

  span: Span
  tight: boolean
  children: Array<Nodes.Item>

  constructor(opts: {
    children: Array<Nodes.Item>
    tight: boolean
    span: Span
  }) {
    super()
    this.span = opts.span
    this.tight = opts.tight
    this.children = opts.children
  }

  shallowCopy(): List {
    return new List(this)
  }

  json() {
    return {
      kind: this.kind,
      tight: this.tight,
      children: this.children.map((child) => child.json()),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onList(this)
  }

  format(): string {
    if (this.tight) {
      return this.children.map((child) => child.format()).join("\n")
    } else {
      return this.children.map((child) => child.format()).join("\n\n")
    }
  }
}
