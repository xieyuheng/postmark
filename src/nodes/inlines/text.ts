import { Inline } from "../../node"
import { NodeVisitor } from "../../node-visitor"

export class Text extends Inline {
  kind = "Text"

  text: string

  constructor(opts: { text: string }) {
    super()
    this.text = opts.text
  }

  shallowCopy(): Text {
    return new Text(this)
  }

  json() {
    return {
      kind: this.kind,
      text: this.text,
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onText ? visitor.onText(this) : visitor.default(this)
  }

  format(): string {
    return this.text
  }
}
