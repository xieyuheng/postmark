import { TaggedItem } from "./tagged-item"

export interface CustomItemPlugin<T = null> {
  customKind: string
  recognize: (item: TaggedItem) => boolean
  build?: (item: TaggedItem) => T
}
