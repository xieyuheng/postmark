import { Node } from "../../node"
import { Tag } from "./tag"

export class Content {
  nodes: Array<Node>

  constructor(nodes: Array<Node>) {
    this.nodes = nodes
  }

  get fullText(): string {
    return this.nodes.map((node) => node.format()).join("")
  }

  get text(): string {
    return Tag.trim(this.fullText)
  }

  json() {
    return this.text
  }
}
