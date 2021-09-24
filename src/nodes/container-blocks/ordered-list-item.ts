import { ListItem } from "./list-item"
import { Node, Span } from "../../node"

export class OrderedListItem extends ListItem {
  kind = "OrderedListItem"

  span: Span
  number: number
  delimiter: "." | ")"
  children: Array<Node>

  constructor(opts: {
    children: Array<Node>
    number: number
    delimiter: "." | ")"
    span: Span
  }) {
    super()
    this.span = opts.span
    this.number = opts.number
    this.delimiter = opts.delimiter
    this.children = opts.children
  }

  shallowCopy(): OrderedListItem {
    return new OrderedListItem(this)
  }

  json() {
    return {
      kind: this.kind,
      number: this.number,
      delimiter: this.delimiter,
      children: this.children.map((child) => child.json()),
    }
  }
}
