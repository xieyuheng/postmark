import { LineBreak } from "./line-break"
import { NodeVisitor } from "../../node"

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
    return visitor.onSoftLineBreak
      ? visitor.onSoftLineBreak(this)
      : visitor.default(this)
  }

  format(): string {
    return "\n"
  }
}
