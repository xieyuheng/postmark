import { NodeVisitor } from "../../node"
import * as Nodes from "../../nodes"

export class HardLineBreak extends Nodes.LineBreak {
  kind = "HardLineBreak"

  constructor() {
    super()
  }

  shallowCopy(): HardLineBreak {
    return new HardLineBreak()
  }

  json() {
    return {
      kind: this.kind,
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onHardLineBreak(this)
  }

  format(): string {
    return "\\\n"
  }
}
