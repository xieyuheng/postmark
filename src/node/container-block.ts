import { Node, Span, Block } from "../node"

export abstract class ContainerBlock extends Block {
  instanceofContainerBlock = true

  abstract children: Array<Node>

  static isContainerBlock(node: Node): node is ContainerBlock {
    return (node as ContainerBlock).instanceofContainerBlock
  }
}
