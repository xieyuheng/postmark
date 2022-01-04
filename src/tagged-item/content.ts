import { Node } from "../node"
import { Parser } from "../parser"
import { Tag } from "./tag"

export class Content {
  fullNodes: Array<Node>
  parser: Parser

  constructor(fullNodes: Array<Node>, opts: { parser: Parser }) {
    this.fullNodes = fullNodes
    this.parser = opts.parser
  }

  get fullText(): string {
    return this.fullNodes.map((node) => node.format()).join("\n\n")
  }

  get text(): string {
    return Tag.trim(this.fullText)
  }

  get nodes(): Array<Node> {
    return this.parser.parseNodes(this.text)
  }

  json() {
    return this.text
  }
}
