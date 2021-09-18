import { Node, Span } from "../node"
import { nodeFromCommonmark } from "../api"
import * as Commonmark from "../vendor/commonmark"

export class ListItem extends Node {
  kind = "ListItem"

  span: Span
  children: Array<Node>

  constructor(opts: { children: Array<Node>; span: Span }) {
    super()
    this.span = opts.span
    this.children = opts.children
  }

  json() {
    return {
      kind: this.kind,
      children: this.children.map((child) => child.json()),
    }
  }

  static fromCommonmark(node: Commonmark.Node): undefined | ListItem {
    if (node.type === "item") {
      return new ListItem({
        span: node.sourcepos && Span.fromPairs(node.sourcepos),
        children: Commonmark.children(node).map(nodeFromCommonmark),
      })
    }
  }
}
