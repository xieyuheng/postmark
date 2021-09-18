import { Node, Span } from "../node"
import { nodeFromCommonmark } from "../api"
import * as Commonmark from "../vendor/commonmark"
import ty from "@xieyuheng/ty"

export class OrderedList extends Node {
  kind = "OrderedList"

  span: Span
  tight: boolean
  children: Array<Node>

  constructor(opts: { children: Array<Node>; tight: boolean; span: Span }) {
    super()
    this.span = opts.span
    this.tight = opts.tight
    this.children = opts.children
  }

  json() {
    return {
      kind: this.kind,
      tight: this.tight,
      children: this.children.map((child) => child.json()),
    }
  }

  static fromCommonmark(node: Commonmark.Node): undefined | OrderedList {
    if (node.type === "list" && node.listType === "ordered") {
      return new OrderedList({
        span: node.sourcepos && Span.fromPairs(node.sourcepos),
        tight: ty.boolean().validate(node.listTight),
        children: Commonmark.children(node).map(nodeFromCommonmark),
      })
    }
  }
}
