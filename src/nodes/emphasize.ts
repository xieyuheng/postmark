import { Node, Span } from "../node"

export class Emphasize extends Node {
  kind = "Emphasize"

  children: Array<Node>

  constructor(opts: { children: Array<Node> }) {
    super()
    this.children = opts.children
  }
}
