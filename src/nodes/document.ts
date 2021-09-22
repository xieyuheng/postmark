import { Node, Span } from "../node"
import { nodeFromCommonmark } from "../api"
import * as Commonmark from "../vendor/commonmark"

export class Document<A> extends Node {
  kind = "Document"

  attributes: A

  span: Span
  children: Array<Node>

  constructor(opts: { attributes: A; span: Span; children: Array<Node> }) {
    super()
    this.attributes = opts.attributes
    this.span = opts.span
    this.children = opts.children
  }

  json() {
    return {
      kind: this.kind,
      children: this.children.map((child) => child.json()),
    }
  }

  static fromCommonmark<A>(
    node: Commonmark.Node,
    opts: { attributes: A }
  ): undefined | Document<A> {
    if (node.type === "document") {
      return new Document({
        attributes: opts.attributes,
        span: node.sourcepos && Span.fromPairs(node.sourcepos),
        children: Commonmark.children(node).map(nodeFromCommonmark),
      })
    }
  }
}
