import { Inline } from "../../node"
import { NodeVisitor } from "../../node"

export class HtmlTag extends Inline {
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
}
