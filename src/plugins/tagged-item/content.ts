import { Node } from "../../node"
import * as Nodes from "../../nodes"

export class Content {
  nodes: Array<Node>

  constructor(nodes: Array<Node>) {
    this.nodes = nodes
  }

  static build(nodes: Array<Node>): Content {
    const results: Array<Node> = []
    for (const node of nodes) {
      if (node instanceof Nodes.List) {
        break
      } else {
        results.push(node)
      }
    }

    return new Content(results)
  }

  get text(): string {
    return this.nodes.map((node) => node.format()).join("")
  }
}
