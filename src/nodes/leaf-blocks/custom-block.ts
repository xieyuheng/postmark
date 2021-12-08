import { NodeVisitor, Span } from "../../node"
import * as Nodes from "../../nodes"

export class CustomBlock<T> extends Nodes.CodeBlock {
  kind = "CustomBlock"

  customKind: string

  span: Span
  info: string
  text: string

  value: T

  constructor(opts: {
    customKind: string
    span: Span
    info: string
    text: string
    value: T
  }) {
    super({ ...opts, isIndentedCodeBlock: false })
    this.customKind = opts.customKind
    this.span = opts.span
    this.info = opts.info
    this.text = opts.text
    this.value = opts.value
  }

  shallowCopy(): CustomBlock<T> {
    return new CustomBlock(this)
  }

  json() {
    return {
      kind: this.kind,
      customKind: this.customKind,
      info: this.info,
      text: this.text,
      value: this.value,
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onCustomBlock(this)
  }

  format(): string {
    return ["``` " + this.info, this.text.trim(), "```"].join("\n")
  }
}
