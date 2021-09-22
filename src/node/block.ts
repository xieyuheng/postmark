import { Node, Span } from "../node"

export abstract class Block extends Node {
  instanceofBlock = true

  abstract kind: string
  abstract span: Span
  abstract json(): any

  isBlock(node: Node): node is Block {
    return (node as Block).instanceofBlock
  }
}
