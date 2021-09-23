import { Inline } from "../../node"
import * as Commonmark from "../../vendor/commonmark"
import ty from "@xieyuheng/ty"

export class Text extends Inline {
  kind = "Text"

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

  static fromCommonmark(node: Commonmark.Node): undefined | Text {
    if (node.type === "text") {
      return new Text({
        text: ty.string().validate(node.literal),
      })
    }
  }
}
