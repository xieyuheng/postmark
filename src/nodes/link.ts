import { Node } from "../node"
import { nodeFromCommonmark } from "../api"
import * as Commonmark from "../vendor/commonmark"
import ty from "@xieyuheng/ty"

export class Link extends Node {
  kind = "Link"

  title: string
  children: Array<Node>

  constructor(opts: { title: string; children: Array<Node> }) {
    super()
    this.title = opts.title
    this.children = opts.children
  }

  json() {
    return {
      kind: this.kind,
      title: this.title,
      children: this.children.map((child) => child.json()),
    }
  }

  static fromCommonmark(node: Commonmark.Node): undefined | Link {
    if (node.type === "link") {
      return new Link({
        title: ty.string().validate(node.title),
        children: Commonmark.children(node).map(nodeFromCommonmark),
      })
    }
  }
}
