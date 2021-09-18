import { Node, Span } from "../node"
import { nodeFromCommonmark } from "../api"
import * as Commonmark from "../vendor/commonmark"
import ty from "@xieyuheng/ty"

export class HtmlBlock extends Node {
  kind = "HtmlBlock"

  span: Span
  value: string

  constructor(opts: { span: Span; value: string }) {
    super()
    this.span = opts.span
    this.value = opts.value
  }

  json() {
    return {
      kind: this.kind,
      value: this.value,
    }
  }

  static fromCommonmark(node: Commonmark.Node): undefined | HtmlBlock {
    if (node.type === "html_block") {
      return new HtmlBlock({
        span: node.sourcepos && Span.fromPairs(node.sourcepos),
        value: ty.string().validate(node.literal),
      })
    }
  }
}
