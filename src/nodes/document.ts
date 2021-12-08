import YAML from "js-yaml"
import { Node, NodeVisitor, Span } from "../node"

export class Document extends Node {
  kind = "Document"

  attributes: any

  span: Span
  children: Array<Node>

  constructor(opts: { attributes: any; span: Span; children: Array<Node> }) {
    super()
    this.attributes = opts.attributes
    this.span = opts.span
    this.children = opts.children
  }

  shallowCopy(): Document {
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

  assertChildrenJson(children: Array<any>): void {
    this.assertNode({ kind: "Document", children })
  }
}
