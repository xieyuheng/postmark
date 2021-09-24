import { LeafBlock, Span } from "../../node"

export class ThematicBreak extends LeafBlock {
  kind = "ThematicBreak"

  span: Span

  constructor(opts: { span: Span }) {
    super()
    this.span = opts.span
  }

  shallowCopy(): ThematicBreak {
    return new ThematicBreak(this)
  }

  json() {
    return {
      kind: this.kind,
    }
  }
}
