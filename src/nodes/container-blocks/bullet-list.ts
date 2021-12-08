import { NodeVisitor, Span } from "../../node"
import * as Nodes from "../../nodes"
import { List } from "./list"

export class BulletList extends List {
  kind = "BulletList"

  span: Span
  tight: boolean
  children: Array<Nodes.BulletListItem>

  constructor(opts: {
    children: Array<Nodes.BulletListItem>
    tight: boolean
    span: Span
  }) {
    super()
    this.span = opts.span
    this.tight = opts.tight
    this.children = opts.children
  }

  shallowCopy(): BulletList {
    return new BulletList(this)
  }

  json() {
    return {
      kind: this.kind,
      tight: this.tight,
      children: this.children.map((child) => child.json()),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onBulletList(this)
  }

  format(): string {
    if (this.tight) {
      return this.children.map((child) => child.format()).join("\n")
    } else {
      return this.children.map((child) => child.format()).join("\n\n")
    }
  }
}
