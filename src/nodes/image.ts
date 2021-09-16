import { Node } from "../node"
import { nodeFromCommonmark } from "../api"
import * as Commonmark from "../vendor/commonmark"
import ty from "@xieyuheng/ty"

export class Image extends Node {
  kind = "Image"

  title: string
  href: string
  children: Array<Node>

  constructor(opts: { title: string; href: string, children: Array<Node> }) {
    super()
    this.title = opts.title
    this.href = opts.href
    this.children = opts.children
  }

  json() {
    return {
      kind: this.kind,
      title: this.title,
      href: this.href,
      children: this.children.map((child) => child.json()),
    }
  }

  static fromCommonmark(node: Commonmark.Node): undefined | Image {
    if (node.type === "image") {
      return new Image({
        title: ty.string().validate(node.title),
        href: ty.string().validate(node.destination),
        children: Commonmark.children(node).map(nodeFromCommonmark),
      })
    }
  }
}
