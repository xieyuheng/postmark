import { NodeVisitor, Span } from "../../node"
import * as Nodes from "../../nodes"
import { TaggedList } from "../../plugins/tagged-list"

export class CustomTaggedList<T> extends Nodes.CustomList<T> {
  kind = "CustomTaggedList"

  customKind: string

  span: Span
  list: Nodes.List
  taggedList: TaggedList
  value: T

  constructor(opts: {
    customKind: string
    span: Span
    list: Nodes.List
    taggedList: TaggedList
    value: T
  }) {
    super(opts)
    this.customKind = opts.customKind
    this.span = opts.span
    this.list = opts.list
    this.taggedList = opts.taggedList
    this.value = opts.value
  }

  shallowCopy(): CustomTaggedList<T> {
    return new CustomTaggedList(this)
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onCustomTaggedList(this)
  }
}
