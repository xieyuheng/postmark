import * as Nodes from ".."
import { Node, NodeVisitor, Span } from "../../node"

export class OrderedItem extends Nodes.Item {
  kind = "OrderedItem"

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
    super(opts)
    this.span = opts.span
    this.number = opts.number
    this.delimiter = opts.delimiter
    this.children = opts.children
  }

  shallowCopy(): OrderedItem {
    return new OrderedItem(this)
  }

  json() {
    return {
      kind: this.kind,
      number: this.number,
      delimiter: this.delimiter,
      children: this.children.map((child) => child.json()),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onOrderedItem(this)
  }

  format(): string {
    const text = this.children.map((child) => child.format()).join("\n")
    const lines = text.split("\n")

    const prefix = this.number + this.delimiter + " "
    const head = prefix + lines[0]
    const tail = lines.splice(1).map((line) => " ".repeat(prefix.length) + line)

    return [head, ...tail].join("\n")
  }
}
