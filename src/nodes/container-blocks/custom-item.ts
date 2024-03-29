import { Node, Span } from "../../node"
import { NodeVisitor } from "../../node-visitor"
import * as Nodes from "../../nodes"
import { TaggedItem } from "../../tagged-item"

export class CustomItem<T> extends Nodes.Item {
  kind = "CustomItem"

  customKind: string
  span: Span
  children: Array<Node> = []
  item: Nodes.Item
  taggedItem: TaggedItem

  value: T

  constructor(opts: {
    customKind: string
    span: Span
    taggedItem: TaggedItem
    item: Nodes.Item
    value: T
  }) {
    super({ ...opts, children: [] })
    this.customKind = opts.customKind
    this.span = opts.span
    this.item = opts.item
    this.taggedItem = opts.taggedItem
    this.value = opts.value
  }

  shallowCopy(): CustomItem<T> {
    return new CustomItem(this)
  }

  json(): any {
    return {
      kind: this.kind,
      customKind: this.customKind,
      taggedItem: this.taggedItem.json(),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onCustomItem(this)
  }

  format(): string {
    return this.item.format()
  }
}
