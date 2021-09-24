import { Node } from "../node"

export abstract class Block extends Node {
  instanceofBlock = true

  static isBlock(node: Node): node is Block {
    return (node as Block).instanceofBlock
  }
}
