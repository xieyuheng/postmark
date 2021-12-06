import { Block, Node } from "../node"

export abstract class LeafBlock extends Block {
  instanceofLeafBlock = true

  static isLeafBlock(node: Node): node is LeafBlock {
    return (node as LeafBlock).instanceofLeafBlock
  }
}
