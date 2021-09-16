import { Node } from "../node"
import { nodeFromCommonmark } from "../api"
import * as Commonmark from "../vendor/commonmark"

export class Strong extends Node {
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
