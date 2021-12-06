import { Node } from "../../node"
import { NodeVisitor } from "../../node-visitor"
import * as Nodes from "../../nodes"

export class Link extends Nodes.Inline {
  kind = "Link"

  title: string
  href: string
  children: Array<Node>

  constructor(opts: { title: string; href: string; children: Array<Node> }) {
    super()
    this.title = opts.title
    this.href = opts.href
    this.children = opts.children
  }

  shallowCopy(): Link {
    return new Link(this)
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
    return visitor.onLink ? visitor.onLink(this) : visitor.default(this)
  }

  format(): string {
    const text = this.children.map((child) => child.format()).join("")
    if (this.title) {
      return `[${text}](${this.href} "${this.title}")`
    } else {
      return `[${text}](${this.href})`
    }
  }
}
