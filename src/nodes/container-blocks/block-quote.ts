import { ContainerBlock, Node, Span } from "../../node"
import { NodeVisitor } from "../../node-visitor"

export class BlockQuote extends ContainerBlock {
  kind = "BlockQuote"

  span: Span
  children: Array<Node>

  constructor(opts: { children: Array<Node>; span: Span }) {
    super()
    this.span = opts.span
    this.children = opts.children
  }

  shallowCopy(): BlockQuote {
    return new BlockQuote(this)
  }

  json() {
    return {
      kind: this.kind,
      children: this.children.map((child) => child.json()),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onBlockQuote
      ? visitor.onBlockQuote(this)
      : visitor.default(this)
  }

  format(): string {
    // NOTE We use "\n\n" instead of "\n" here.
    const text = this.children.map((child) => child.format()).join("\n\n")
    const lines = text.split("\n")

    const prefix = "> "

    return lines.map((line) => prefix + line).join("\n")
  }
}
