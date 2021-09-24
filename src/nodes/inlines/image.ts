import { Inline, Node } from "../../node"
import { NodeVisitor } from "../../node"

export class Image extends Inline {
  kind = "Image"

  title: string
  href: string
  children: Array<Node>

  constructor(opts: { title: string; href: string; children: Array<Node> }) {
    super()
    this.title = opts.title
    this.href = opts.href
    this.children = opts.children
  }

  shallowCopy(): Image {
    return new Image(this)
  }

  json() {
    return {
      kind: this.kind,
      title: this.title,
      href: this.href,
      children: this.children.map((child) => child.json()),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onImage ? visitor.onImage(this) : visitor.default(this)
  }
}
