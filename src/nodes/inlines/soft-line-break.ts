import { LineBreak } from "./line-break"
import * as Commonmark from "../../vendor/commonmark"

export class SoftLineBreak extends LineBreak {
  kind = "SoftLineBreak"

  constructor() {
    super()
  }

  json() {
    return {
      kind: this.kind,
    }
  }

  static fromCommonmark(node: Commonmark.Node): undefined | SoftLineBreak {
    if (node.type === "softbreak") {
      return new SoftLineBreak()
    }
  }
}
