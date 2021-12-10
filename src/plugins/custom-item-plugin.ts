import { TaggedItem } from "./tagged-item"

export interface CustomItemPlugin<T> {
  customKind: string
  recognize: (item: TaggedItem) => boolean
  parse: (item: TaggedItem) => T
}
