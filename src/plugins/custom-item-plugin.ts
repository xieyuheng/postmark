import { TaggedItem } from "./tagged-item"

export interface CustomItemPlugin<T> {
  customKind: string
  recognize: (list: TaggedItem) => boolean
  parse: (list: TaggedItem) => T
}
