import { ContainerBlock, Node, Span } from "../../node"
import { nodeFromCommonmark } from "../../api"
import * as Commonmark from "../../vendor/commonmark"
import ty from "@xieyuheng/ty"

export abstract class List extends ContainerBlock {
  instanceofList = true

  abstract tight: boolean

  static isList(node: Node): node is List {
    return (node as List).instanceofList
  }
}
