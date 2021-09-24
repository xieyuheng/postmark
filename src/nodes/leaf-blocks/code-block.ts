import { CodeBlockParser } from "src/code-block-parser"
import { LeafBlock, Span } from "../../node"
import { NodeVisitor } from "../../node"

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
    return (visitor.onCodeBlock || visitor.default)(this)
  }
}
