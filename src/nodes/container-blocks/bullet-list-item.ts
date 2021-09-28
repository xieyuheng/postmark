import { ListItem } from "./list-item"
import { Node, Span } from "../../node"
import { NodeVisitor } from "../../node"

export class BulletListItem extends ListItem {
  kind = "BulletListItem"

  span: Span
  children: Array<Node>

  constructor(opts: { children: Array<Node>; span: Span }) {
    super()
    this.span = opts.span
    this.children = opts.children
  }

  shallowCopy(): BulletListItem {
    return new BulletListItem(this)
  }

  json() {
    return {
      kind: this.kind,
      children: this.children.map((child) => child.json()),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onBulletListItem
      ? visitor.onBulletListItem(this)
      : visitor.default(this)
  }

  indent(text: string): string {
    const lines = text.split("\n")
    const prefix = "- "
    const head = prefix + lines[0]
    const tail = lines.splice(1).map((line) => " ".repeat(prefix.length) + line)

    return [head, ...tail].join("\n")
  }

  format(): string {
    return this.indent(this.children.map((child) => child.format()).join("\n"))
  }
}
