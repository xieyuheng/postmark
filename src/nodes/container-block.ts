import { Node } from "../node"
import * as Nodes from "../nodes"

export abstract class ContainerBlock extends Nodes.Block {
  instanceofContainerBlock = true

  static isContainerBlock(node: Node): node is ContainerBlock {
    return (node as ContainerBlock).instanceofContainerBlock
  }
}
