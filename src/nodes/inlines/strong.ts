import { Node, NodeVisitor } from "../../node"
import * as Nodes from "../../nodes"

export class Strong extends Nodes.Inline {
  kind = "Strong"

  children: Array<Node>

  constructor(opts: { children: Array<Node> }) {
    super()
    this.children = opts.children
  }

  shallowCopy(): Strong {
    return new Strong(this)
  }

  json() {
    return {
      kind: this.kind,
      children: this.children.map((child) => child.json()),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onStrong(this)
  }

  format(): string {
    return "**" + this.children.map((child) => child.format()).join("") + "**"
  }
}
