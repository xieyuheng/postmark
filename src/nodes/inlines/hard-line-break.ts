import { LineBreak } from "./line-break"
import * as Commonmark from "../../vendor/commonmark"

export class HardLineBreak extends LineBreak {
  kind = "HardLineBreak"

  constructor() {
    super()
  }

  json() {
    return {
      kind: this.kind,
    }
  }

  static fromCommonmark(node: Commonmark.Node): undefined | HardLineBreak {
    if (node.type === "linebreak") {
      return new HardLineBreak()
    }
  }
}
