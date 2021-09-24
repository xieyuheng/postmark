import { ContainerBlock, Node, Span } from "../../node"

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
}
