import { ContainerBlock, Node } from "../../node"

export abstract class List extends ContainerBlock {
  instanceofList = true

  abstract tight: boolean

  static isList(node: Node): node is List {
    return (node as List).instanceofList
  }
}
