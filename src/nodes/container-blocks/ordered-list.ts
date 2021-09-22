import { List } from "./list"
import { ContainerBlock, Node, Span } from "../../node"
import { nodeFromCommonmark } from "../../api"
import * as Commonmark from "../../vendor/commonmark"
import ty from "@xieyuheng/ty"

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

  static fromCommonmark(node: Commonmark.Node): undefined | OrderedList {
    if (node.type === "list" && node.listType === "ordered") {
      return new OrderedList({
        span: node.sourcepos && Span.fromPairs(node.sourcepos),
        tight: ty.boolean().validate(node.listTight),
        start: ty.number().validate(node.listStart),
        delimiter: ty
          .union(ty.const("." as const), ty.const(")" as const))
          .validate(node.listDelimiter),
        children: Commonmark.children(node).map(nodeFromCommonmark),
      })
    }
  }
}
