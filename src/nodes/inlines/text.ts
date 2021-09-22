import { Inline } from "../../node"
import * as Commonmark from "../../vendor/commonmark"
import ty from "@xieyuheng/ty"

export class Text extends Inline {
  kind = "Text"

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

  static fromCommonmark(node: Commonmark.Node): undefined | Text {
    if (node.type === "text") {
      return new Text({
        value: ty.string().validate(node.literal),
      })
    }
  }
}
