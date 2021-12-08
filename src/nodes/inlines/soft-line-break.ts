import { NodeVisitor } from "../../node"
import { LineBreak } from "./line-break"

export class SoftLineBreak extends LineBreak {
  kind = "SoftLineBreak"

  constructor() {
    super()
  }

  shallowCopy(): SoftLineBreak {
    return new SoftLineBreak()
  }

  json() {
    return {
      kind: this.kind,
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onSoftLineBreak(this)
  }

  format(): string {
    return "\n"
  }
}
