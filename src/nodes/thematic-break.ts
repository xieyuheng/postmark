import { Node, Span } from "../node"
import { nodeFromCommonmark } from "../api"
import * as Commonmark from "../vendor/commonmark"

export class ThematicBreak extends Node {
  kind = "ThematicBreak"

  span: Span

  constructor(opts: { span: Span }) {
    super()
    this.span = opts.span
  }

  json() {
    return {
      kind: this.kind,
    }
  }
}
