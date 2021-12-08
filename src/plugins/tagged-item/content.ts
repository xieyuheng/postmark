import { Node } from "../../node"

export class Content {
  nodes: Array<Node>

  constructor(nodes: Array<Node>) {
    this.nodes = nodes
  }

  get text(): string {
    return this.nodes.map((node) => node.format()).join("")
  }
}
