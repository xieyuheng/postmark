import { Node, Span } from "../../node"
import { NodeVisitor } from "../../node-visitor"
import * as Nodes from "../../nodes"
import { List } from "./list"

export class CustomList<T> extends List {
  kind = "CustomList"

  customKind: string

  span: Span
  list: Nodes.List
  value: T

  constructor(opts: {
    customKind: string
    span: Span
    list: Nodes.List
    value: T
  }) {
    super()
    this.customKind = opts.customKind
    this.span = opts.span
    this.list = opts.list
    this.value = opts.value
  }

  get tight(): boolean {
    return this.list.tight
  }

  set tight(tight: boolean) {
    this.list.tight = tight
  }

  get children(): Array<Node> {
    return this.list.children
  }

  set children(children: Array<Node>) {
    this.list.children = children
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
