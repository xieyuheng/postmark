import { NodeVisitor, Span } from "../../node"
import * as Nodes from "../../nodes"

export class CodeBlock extends Nodes.LeafBlock {
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

  shallowCopy(): CodeBlock {
    return new CodeBlock(this)
  }

  json() {
    return {
      kind: this.kind,
      info: this.info,
      text: this.text,
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onCodeBlock(this)
  }

  format(): string {
    return ["``` " + this.info, this.text.trim(), "```"].join("\n")
  }
}
