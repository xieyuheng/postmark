import { ContainerBlock, Node } from "../../node"

export abstract class ListItem extends ContainerBlock {
  instanceofListItem = true

  static isListItem(node: Node): node is ListItem {
    return (node as ListItem).instanceofListItem
  }
}
