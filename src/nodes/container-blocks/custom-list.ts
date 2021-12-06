import { Node, Span } from "../../node"
import { NodeVisitor } from "../../node-visitor"
import { List } from "./list"

export class CustomList<T> extends List {
  kind = "CustomList"

  customKind: string

  span: Span
  tight: boolean
  children: Array<Node>

  value: T

  constructor(opts: {
    customKind: string
    span: Span
    tight: boolean
    children: Array<Node>
    value: T
  }) {
    super()
    this.customKind = opts.customKind
    this.span = opts.span
    this.tight = opts.tight
    this.children = opts.children
    this.value = opts.value
  }

  shallowCopy(): CustomList<T> {
    return new CustomList(this)
  }

  json() {
    return {
      kind: this.kind,
      tight: this.tight,
      children: this.children.map((child) => child.json()),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onCustomList
      ? visitor.onCustomList(this)
      : visitor.default(this)
  }

  format(): string {
    if (this.tight) {
      return this.children.map((child) => child.format()).join("\n")
    } else {
      return this.children.map((child) => child.format()).join("\n\n")
    }
  }
}
