import { BlockPlugin } from "./block-plugin"
import { ItemPlugin } from "./item-plugin"

export type Plugin = BlockPlugin<unknown> | ItemPlugin<unknown>
