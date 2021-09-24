import { List } from "./list"
import { Node, Span } from "../../node"
import { NodeVisitor } from "../../node"

export class BulletList extends List {
  kind = "BulletList"

  span: Span
  tight: boolean
  children: Array<Node>

  constructor(opts: { children: Array<Node>; tight: boolean; span: Span }) {
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
    return visitor.onBulletList
      ? visitor.onBulletList(this)
      : visitor.default(this)
  }
}
