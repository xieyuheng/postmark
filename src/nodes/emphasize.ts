import { Node } from "../node"
import { nodeFromCommonmark } from "../api"
import * as Commonmark from "../vendor/commonmark"

export class Emphasize extends Node {
  kind = "Emphasize"

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

  static fromCommonmark(node: Commonmark.Node): undefined | Emphasize {
    if (node.type === "emph") {
      return new Emphasize({
        children: Commonmark.children(node).map(nodeFromCommonmark),
      })
    }
  }
}
