import { Inline } from "../../node"
import * as Commonmark from "../../vendor/commonmark"
import ty from "@xieyuheng/ty"

export class HtmlTag extends Inline {
  kind = "HtmlTag"

  text: string

  constructor(opts: { text: string }) {
    super()
    this.text = opts.text
  }

  json() {
    return {
      kind: this.kind,
      text: this.text,
    }
  }

  static fromCommonmark(node: Commonmark.Node): undefined | HtmlTag {
    if (node.type === "html_inline") {
      return new HtmlTag({
        text: ty.string().validate(node.literal),
      })
    }
  }
}
