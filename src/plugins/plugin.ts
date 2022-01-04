import { BlockPlugin } from "./block-plugin"
import { ItemPlugin } from "./item-plugin"

export type Plugin<T = null> = BlockPlugin<T> | ItemPlugin<T>
