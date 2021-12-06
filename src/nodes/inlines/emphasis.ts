import { Node } from "../../node"
import { NodeVisitor } from "../../node-visitor"
import * as Nodes from "../../nodes"

export class Emphasis extends Nodes.Inline {
  kind = "Emphasis"

  children: Array<Node>

  constructor(opts: { children: Array<Node> }) {
    super()
    this.children = opts.children
  }

  shallowCopy(): Emphasis {
    return new Emphasis(this)
  }

  json() {
    return {
      kind: this.kind,
      children: this.children.map((child) => child.json()),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onEmphasis(this)
  }

  format(): string {
    return "*" + this.children.map((child) => child.format()).join("") + "*"
  }
}
