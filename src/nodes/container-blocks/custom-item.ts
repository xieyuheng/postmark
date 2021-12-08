import { Node, NodeVisitor, Span } from "../../node"
import * as Nodes from "../../nodes"
import { TaggedItem } from "../../plugins/tagged-item"

export class CustomItem extends Nodes.Item {
  kind = "CustomItem"

  customKind: string
  span: Span
  children: Array<Node> = []
  taggedItem: TaggedItem

  constructor(opts: {
    customKind: string
    span: Span
    taggedItem: TaggedItem
  }) {
    super({ ...opts, children: [] })
    this.customKind = opts.customKind
    this.span = opts.span
    this.taggedItem = opts.taggedItem
  }

  shallowCopy(): CustomItem {
    return new CustomItem(this)
  }

  json() {
    return {
      kind: this.kind,
      customKind: this.customKind,
      children: this.children.map((child) => child.json()),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onCustomItem(this)
  }
}
