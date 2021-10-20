import { Inline, Node } from "../../node"
import { NodeVisitor } from "../../node-visitor"

export class Strong extends Inline {
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
    return visitor.onStrong ? visitor.onStrong(this) : visitor.default(this)
  }

  format(): string {
    return "**" + this.children.map((child) => child.format()).join("") + "**"
  }
}
