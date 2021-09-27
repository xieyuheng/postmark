import { Node, Span } from "../node"
import { NodeVisitor } from "../node"
import YAML from "js-yaml"

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

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onDocument
      ? visitor.onDocument(this)
      : visitor.default(this)
  }

  format(): string {
    if (this.attributes) {
      const attributes = YAML.dump(this.attributes).trim()
      const children = this.children.map((child) => child.format()).join("\n\n")
      return ["---", attributes, "---", "", children].join("\n")
    } else {
      const children = this.children.map((child) => child.format()).join("\n\n")
      return children
    }
  }
}
