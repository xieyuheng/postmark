import { Node, Span } from "../node"

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

  shallowCopy(): Document<A> {
    return new Document(this)
  }

  json() {
    return {
      kind: this.kind,
      children: this.children.map((child) => child.json()),
    }
  }
}
