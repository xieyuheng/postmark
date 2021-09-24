import { ContainerBlock, Node, Span } from "../../node"
import { nodeFromCommonmark } from "../../api"
import * as Commonmark from "../../vendor/commonmark"

export class BlockQuote extends ContainerBlock {
  kind = "BlockQuote"

  span: Span
  children: Array<Node>

  constructor(opts: { children: Array<Node>; span: Span }) {
    super()
    this.span = opts.span
    this.children = opts.children
  }

  json() {
    return {
      kind: this.kind,
      children: this.children.map((child) => child.json()),
    }
  }
}
