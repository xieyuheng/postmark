import { Span } from "../../node"
import { NodeVisitor } from "../../node-visitor"
import * as Nodes from "../../nodes"
import { List } from "./list"

export class OrderedList extends List {
  kind = "OrderedList"

  span: Span
  tight: boolean
  start: number
  delimiter: "." | ")"
  children: Array<Nodes.OrderedListItem>

  constructor(opts: {
    children: Array<Nodes.OrderedListItem>
    tight: boolean
    start: number
    delimiter: "." | ")"
    span: Span
  }) {
    super()
    this.span = opts.span
    this.tight = opts.tight
    this.start = opts.start
    this.delimiter = opts.delimiter
    this.children = opts.children
  }

  shallowCopy(): OrderedList {
    return new OrderedList(this)
  }

  json() {
    return {
      kind: this.kind,
      tight: this.tight,
      start: this.start,
      delimiter: this.delimiter,
      children: this.children.map((child) => child.json()),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onOrderedList(this)
  }

  format(): string {
    if (this.tight) {
      return this.children.map((child) => child.format()).join("\n")
    } else {
      return this.children.map((child) => child.format()).join("\n\n")
    }
  }
}
