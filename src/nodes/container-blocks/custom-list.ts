import { NodeVisitor, Span } from "../../node"
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

  shallowCopy(): CustomList<T> {
    return new CustomList(this)
  }

  json() {
    return {
      customKind: this.customKind,
      list: this.list.json(),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onCustomList(this)
  }

  format(): string {
    return this.list.format()
  }
}
