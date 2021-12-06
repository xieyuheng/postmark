import { Node } from "../../node"
import * as Nodes from "../../nodes"

export abstract class List extends Nodes.ContainerBlock {
  instanceofList = true

  abstract tight: boolean

  static isList(node: Node): node is List {
    return (node as List).instanceofList
  }
}
