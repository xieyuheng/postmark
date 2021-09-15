import { Node, ContainerNode, Span } from "../node"

export class Strong extends ContainerNode {
  kind = "Strong"

  children: Array<Node>

  constructor(opts: { children: Array<Node> }) {
    super()
    this.children = opts.children
  }

  json() {
    return {
      kind: this.kind,
      children: this.children.map((child) => child.json()),
    }
  }
}
