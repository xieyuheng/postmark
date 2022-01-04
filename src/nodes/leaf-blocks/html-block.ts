import { Span } from "../../node"
import { NodeVisitor } from "../../node-visitor"
import * as Nodes from "../../nodes"

export class HtmlBlock extends Nodes.LeafBlock {
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
    return visitor.onHtmlBlock(this)
  }

  format(): string {
    return this.text.trim()
  }
}
