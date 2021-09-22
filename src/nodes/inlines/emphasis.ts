import { Inline, Node } from "../../node"
import { nodeFromCommonmark } from "../../api"
import * as Commonmark from "../../vendor/commonmark"

export class Emphasis extends Inline {
  kind = "Emphasis"

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

  static fromCommonmark(node: Commonmark.Node): undefined | Emphasis {
    if (node.type === "emph") {
      return new Emphasis({
        children: Commonmark.children(node).map(nodeFromCommonmark),
      })
    }
  }
}
