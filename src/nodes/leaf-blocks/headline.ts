import { LeafBlock, Node, Span } from "../../node"
import { nodeFromCommonmark } from "../../api"
import * as Commonmark from "../../vendor/commonmark"
import ty from "@xieyuheng/ty"

export class Headline extends LeafBlock {
  kind = "Headline"

  span: Span
  level: number
  children: Array<Node>

  constructor(opts: { span: Span; level: number; children: Array<Node> }) {
    super()
    this.span = opts.span
    this.level = opts.level
    this.children = opts.children
  }

  json() {
    return {
      kind: this.kind,
      level: this.level,
      children: this.children.map((child) => child.json()),
    }
  }

  static fromCommonmark(node: Commonmark.Node): undefined | Headline {
    if (node.type === "heading") {
      return new Headline({
        span: node.sourcepos && Span.fromPairs(node.sourcepos),
        level: ty.number().validate(node.level),
        children: Commonmark.children(node).map(nodeFromCommonmark),
      })
    }
  }
}
