import * as Nodes from "../nodes"
import { TaggedItem } from "../tagged-item"

export interface ItemPlugin<T = null> {
  kind: "CustomItem"
  customKind: string
  recognize: (item: TaggedItem) => boolean
  build?: (
    item: TaggedItem,
    opts: { previousCustomItems: Array<Nodes.CustomItem<T>> }
  ) => T
}
