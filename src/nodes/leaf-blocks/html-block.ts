import { LeafBlock, Span } from "../../node"

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
}
