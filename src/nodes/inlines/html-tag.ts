import { NodeVisitor } from "../../node-visitor"
import * as Nodes from "../../nodes"

export class HtmlTag extends Nodes.Inline {
  kind = "HtmlTag"

  text: string

  constructor(opts: { text: string }) {
    super()
    this.text = opts.text
  }

  shallowCopy(): HtmlTag {
    return new HtmlTag(this)
  }

  json() {
    return {
      kind: this.kind,
      text: this.text,
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onHtmlTag ? visitor.onHtmlTag(this) : visitor.default(this)
  }

  format(): string {
    return this.text
  }
}
