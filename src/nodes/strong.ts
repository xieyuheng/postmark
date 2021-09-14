import { Node, Span } from "../node"

export class Strong extends Node {
  kind = "Strong"

  children: Array<Node>

  constructor(opts: { children: Array<Node> }) {
    super()
    this.children = opts.children
  }
}
