import { NodeVisitor } from "../../node-visitor"
import * as Nodes from "../../nodes"

export class Text extends Nodes.Inline {
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
    return visitor.onText(this)
  }

  format(): string {
    return this.text
  }
}
