import { LeafBlock, Span } from "../../node"
import * as Commonmark from "../../vendor/commonmark"
import ty from "@xieyuheng/ty"

export class CodeBlock extends LeafBlock {
  kind = "CodeBlock"

  span: Span
  info: string
  text: string

  constructor(opts: { span: Span; info: string; text: string }) {
    super()
    this.span = opts.span
    this.info = opts.info
    this.text = opts.text
  }

  json() {
    return {
      kind: this.kind,
      info: this.info,
      text: this.text,
    }
  }

  static fromCommonmark(node: Commonmark.Node): undefined | CodeBlock {
    if (node.type === "code_block") {
      return new CodeBlock({
        span: node.sourcepos && Span.fromPairs(node.sourcepos),
        info: ty.string().validate(node.info),
        text: ty.string().validate(node.literal),
      })
    }
  }
}
