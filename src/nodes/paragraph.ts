import { Node } from "../node"

export class Paragraph extends Node {
  kind = "Paragraph"

  children: Array<Node>

  constructor(opts: { children: Array<Node> }) {
    super()
    this.children = opts.children
  }
}
