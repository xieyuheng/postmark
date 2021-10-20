import { LeafBlock, Span } from "../../node"
import { NodeVisitor } from "../../node-visitor"

export class CustomBlock<T> extends LeafBlock {
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
    super()
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
    return visitor.onCustomBlock
      ? visitor.onCustomBlock(this)
      : visitor.default(this)
  }

  format(): string {
    return ["``` " + this.info, this.text.trim(), "```"].join("\n")
  }
}
