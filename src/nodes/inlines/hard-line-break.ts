import { NodeVisitor } from "../../node"
import { LineBreak } from "./line-break"

export class HardLineBreak extends LineBreak {
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
