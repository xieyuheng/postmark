import { Node, Span } from "../node"

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
