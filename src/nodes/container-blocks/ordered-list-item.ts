import { ListItem } from "./list-item"
import { ContainerBlock, Node, Span } from "../../node"
import { nodeFromCommonmark } from "../../api"
import * as Commonmark from "../../vendor/commonmark"
import ty from "@xieyuheng/ty"

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

  json() {
    return {
      kind: this.kind,
      number: this.number,
      delimiter: this.delimiter,
      children: this.children.map((child) => child.json()),
    }
  }

  static fromCommonmark(node: Commonmark.Node): undefined | OrderedListItem {
    if (node.type === "item" && node.listType === "ordered") {
      return new OrderedListItem({
        span: node.sourcepos && Span.fromPairs(node.sourcepos),
        number: ty.number().validate(node.listStart),
        delimiter: ty
          .union(ty.const("." as const), ty.const(")" as const))
          .validate(node.listDelimiter),
        children: Commonmark.children(node).map(nodeFromCommonmark),
      })
    }
  }
}
