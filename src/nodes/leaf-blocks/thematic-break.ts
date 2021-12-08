import { NodeVisitor, Span } from "../../node"
import * as Nodes from "../../nodes"

export class ThematicBreak extends Nodes.LeafBlock {
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

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onThematicBreak(this)
  }

  format(): string {
    return "------"
  }
}
