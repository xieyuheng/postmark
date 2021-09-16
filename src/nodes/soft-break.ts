import { Node } from "../node"
import { nodeFromCommonmark } from "../api"
import * as Commonmark from "../vendor/commonmark"

export class SoftBreak extends Node {
  kind = "SoftBreak"

  constructor() {
    super()
  }

  json() {
    return {
      kind: this.kind,
    }
  }
}
