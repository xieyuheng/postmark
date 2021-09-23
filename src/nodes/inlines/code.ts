import { Inline } from "../../node"
import * as Commonmark from "../../vendor/commonmark"
import ty from "@xieyuheng/ty"

export class Code extends Inline {
  kind = "Code"

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

  static fromCommonmark(node: Commonmark.Node): undefined | Code {
    if (node.type === "code") {
      return new Code({
        text: ty.string().validate(node.literal),
      })
    }
  }
}
