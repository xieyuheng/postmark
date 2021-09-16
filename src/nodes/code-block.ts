import { Node, Span } from "../node"
import { nodeFromCommonmark } from "../api"
import * as Commonmark from "../vendor/commonmark"
import ty from "@xieyuheng/ty"

export class CodeBlock extends Node {
  kind = "CodeBlock"

  span: Span
  info: string
  value: string

  constructor(opts: { span: Span; info: string; value: string }) {
    super()
    this.span = opts.span
    this.info = opts.info
    this.value = opts.value
  }

  json() {
    return {
      kind: this.kind,
      info: this.info,
      value: this.value,
    }
  }

  static fromCommonmark(node: Commonmark.Node): undefined | CodeBlock {
    if (node.type === "code_block") {
      return new CodeBlock({
        span: node.sourcepos && Span.fromPairs(node.sourcepos),
        info: ty.string().validate(node.info),
        value: ty.string().validate(node.literal),
      })
    }
  }
}
