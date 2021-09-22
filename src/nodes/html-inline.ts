import { Node } from "../node"
import { nodeFromCommonmark } from "../api"
import * as Commonmark from "../vendor/commonmark"
import ty from "@xieyuheng/ty"

export class HtmlInline extends Node {
  kind = "HtmlInline"

  value: string

  constructor(opts: { value: string }) {
    super()
    this.value = opts.value
  }

  json() {
    return {
      kind: this.kind,
      value: this.value,
    }
  }

  static fromCommonmark(node: Commonmark.Node): undefined | HtmlInline {
    if (node.type === "html_inline") {
      return new HtmlInline({
        value: ty.string().validate(node.literal),
      })
    }
  }
}
