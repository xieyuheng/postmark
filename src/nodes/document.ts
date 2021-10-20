import { Node, Span } from "../node"
import { NodeVisitor } from "../node"
import { CustomBlockParser } from "../custom-block-parser"
import * as Postprocessors from "../postprocessors"
import YAML from "js-yaml"

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
}
