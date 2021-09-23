import { LeafBlock, Span } from "../../node"
import * as Commonmark from "../../vendor/commonmark"
import ty from "@xieyuheng/ty"

export class HtmlBlock extends LeafBlock {
  kind = "HtmlBlock"

  span: Span
  text: string

  constructor(opts: { span: Span; text: string }) {
    super()
    this.span = opts.span
    this.text = opts.text
  }

  json() {
    return {
      kind: this.kind,
      text: this.text,
    }
  }

  static fromCommonmark(node: Commonmark.Node): undefined | HtmlBlock {
    if (node.type === "html_block") {
      return new HtmlBlock({
        span: node.sourcepos && Span.fromPairs(node.sourcepos),
        text: ty.string().validate(node.literal),
      })
    }
  }
}
