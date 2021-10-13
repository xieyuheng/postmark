import { Node, Span } from "../node"
import { NodeVisitor } from "../node"
import YAML from "js-yaml"
import * as ut from "../ut"

export class Document<A = any> extends Node {
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
    return visitor.onDocument ? visitor.onDocument(this) : visitor.default(this)
  }

  private formatAttributes(): string {
    function replacer(key: string, value: any): any {
      // NOTE
      return value
    }

    return YAML.dump(this.attributes, {
      noArrayIndent: true,
      replacer,
    }).trim()
  }

  private formatFrontMatter(): string {
    return ["---", this.formatAttributes(), "---"].join("\n")
  }

  format(): string {
    if (Object.keys(this.attributes).length === 0) {
      return this.children.map((child) => child.format()).join("\n\n")
    } else {
      return [
        this.formatFrontMatter(),
        "",
        this.children.map((child) => child.format()).join("\n\n"),
      ].join("\n")
    }
  }
}
