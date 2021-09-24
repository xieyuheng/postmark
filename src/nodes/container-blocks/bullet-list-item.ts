import { ListItem } from "./list-item"
import { Node, Span } from "../../node"

export class BulletListItem extends ListItem {
  kind = "BulletListItem"

  span: Span
  children: Array<Node>

  constructor(opts: { children: Array<Node>; span: Span }) {
    super()
    this.span = opts.span
    this.children = opts.children
  }

  json() {
    return {
      kind: this.kind,
      children: this.children.map((child) => child.json()),
    }
  }
}
