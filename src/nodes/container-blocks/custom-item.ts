import { Node, NodeVisitor, Span } from "../../node"
import * as Nodes from "../../nodes"
import { TaggedItem } from "../../plugins/tagged-item"

export class CustomItem<T> extends Nodes.Item {
  kind = "CustomItem"

  customKind: string
  span: Span
  children: Array<Node> = []
  taggedItem: TaggedItem

  value: T

  constructor(opts: {
    customKind: string
    span: Span
    taggedItem: TaggedItem
    value: T
  }) {
    super({ ...opts, children: [] })
    this.customKind = opts.customKind
    this.span = opts.span
    this.taggedItem = opts.taggedItem
    this.value = opts.value
  }

  shallowCopy(): CustomItem<T> {
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
