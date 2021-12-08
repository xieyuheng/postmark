import { Node } from "../../node"

export class Content {
  nodes: Array<Node>

  constructor(opts: { nodes: Array<Node> }) {
    this.nodes = opts.nodes
  }

  get text(): string {
    return this.nodes.map((node) => node.format()).join("")
  }
}
