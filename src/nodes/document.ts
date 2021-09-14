import { Node } from "../node"

export class Document extends Node {
  kind = "Document"

  children: Array<Node>

  constructor(opts: { children: Array<Node> }) {
    super()
    this.children = opts.children
  }
}
