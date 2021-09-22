import { Node, Span, Block } from "../node"

export abstract class LeafBlock extends Block {
  instanceofLeafBlock = true

  abstract kind: string
  abstract span: Span
  abstract json(): any

  static isLeafBlock(node: Node): node is LeafBlock {
    return (node as LeafBlock).instanceofLeafBlock
  }
}
