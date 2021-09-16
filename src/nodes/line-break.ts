import { Node } from "../node"
import { nodeFromCommonmark } from "../api"
import * as Commonmark from "../vendor/commonmark"

export class LineBreak extends Node {
  kind = "LineBreak"

  constructor() {
    super()
  }

  json() {
    return {
      kind: this.kind,
    }
  }

  static fromCommonmark(node: Commonmark.Node): undefined | LineBreak {
    if (node.type === "linebreak") {
      return new LineBreak()
    }
  }
}
