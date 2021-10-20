import { LeafBlock, Span } from "../../node"
import { NodeVisitor } from "../../node-visitor"

export class HtmlBlock extends LeafBlock {
  kind = "HtmlBlock"

  span: Span
  text: string

  constructor(opts: { span: Span; text: string }) {
    super()
    this.span = opts.span
    this.text = opts.text
  }

  shallowCopy(): HtmlBlock {
    return new HtmlBlock(this)
  }

  json() {
    return {
      kind: this.kind,
      text: this.text,
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onHtmlBlock
      ? visitor.onHtmlBlock(this)
      : visitor.default(this)
  }

  format(): string {
    return this.text.trim()
  }
}
