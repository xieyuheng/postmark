import { Node } from "../../node"
import * as Nodes from "../../nodes"

export abstract class ListItem extends Nodes.ContainerBlock {
  instanceofListItem = true

  static isListItem(node: Node): node is ListItem {
    return (node as ListItem).instanceofListItem
  }
}
