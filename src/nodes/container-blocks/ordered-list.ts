import { List } from "./list"
import { Node, Span } from "../../node"

export class OrderedList extends List {
  kind = "OrderedList"

  span: Span
  tight: boolean
  start: number
  delimiter: "." | ")"
  children: Array<Node>

  constructor(opts: {
    children: Array<Node>
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

  json() {
    return {
      kind: this.kind,
      tight: this.tight,
      start: this.start,
      delimiter: this.delimiter,
      children: this.children.map((child) => child.json()),
    }
  }
}
