import { Inline } from "../../node"
import * as Commonmark from "../../vendor/commonmark"
import ty from "@xieyuheng/ty"

export class HtmlTag extends Inline {
  kind = "HtmlTag"

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

  static fromCommonmark(node: Commonmark.Node): undefined | HtmlTag {
    if (node.type === "html_inline") {
      return new HtmlTag({
        value: ty.string().validate(node.literal),
      })
    }
  }
}
