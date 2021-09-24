import { LeafBlock, Span } from "../../node"

export class CodeBlock extends LeafBlock {
  kind = "CodeBlock"

  span: Span
  info: string
  text: string

  constructor(opts: { span: Span; info: string; text: string }) {
    super()
    this.span = opts.span
    this.info = opts.info
    this.text = opts.text
  }

  json() {
    return {
      kind: this.kind,
      info: this.info,
      text: this.text,
    }
  }
}
