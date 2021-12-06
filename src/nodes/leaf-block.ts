import { Node } from "../node"
import * as Nodes from "../nodes"

export abstract class LeafBlock extends Nodes.Block {
  instanceofLeafBlock = true

  static isLeafBlock(node: Node): node is LeafBlock {
    return (node as LeafBlock).instanceofLeafBlock
  }
}
