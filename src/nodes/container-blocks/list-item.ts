import { ContainerBlock, Node, Span } from "../../node"
import { nodeFromCommonmark } from "../../api"
import * as Commonmark from "../../vendor/commonmark"
import ty from "@xieyuheng/ty"

export abstract class ListItem extends ContainerBlock {
  instanceofListItem = true
}
