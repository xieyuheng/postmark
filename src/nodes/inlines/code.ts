import { NodeVisitor } from "../../node-visitor"
import * as Nodes from "../../nodes"

export class Code extends Nodes.Inline {
  kind = "Code"

  text: string

  constructor(opts: { text: string }) {
    super()
    this.text = opts.text
  }

  shallowCopy(): Code {
    return new Code(this)
  }

  json() {
    return {
      kind: this.kind,
      text: this.text,
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onCode ? visitor.onCode(this) : visitor.default(this)
  }

  format(): string {
    return "`" + this.text + "`"
  }
}
