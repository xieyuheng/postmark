import { NodeVisitor } from "../../node-visitor"
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
