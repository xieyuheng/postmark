import { CustomBlockPlugin } from "./custom-block-plugin"
import { CustomItemPlugin } from "./custom-item-plugin"

export type CustomPlugin =
  | CustomBlockPlugin<unknown>
  | CustomItemPlugin<unknown>
