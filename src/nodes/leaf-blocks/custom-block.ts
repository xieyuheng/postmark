import { CodeBlockParser } from "src/code-block-parser"
import { LeafBlock, Span } from "../../node"
import { NodeVisitor } from "../../node"

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
    }
  }
}
