import { Node, Span } from "../node"

export class CodeBlock extends Node {
  kind = "CodeBlock"

  span: Span
  info: string
  value: string

  constructor(opts: { span: Span; info: string; value: string }) {
    super()
    this.span = opts.span
    this.info = opts.info
    this.value = opts.value
  }

  json() {
    return {
      kind: this.kind,
      info: this.info,
      value: this.value,
    }
  }
}
