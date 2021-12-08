import { Node, Span } from "../node"
import * as Nodes from "../nodes"

export abstract class ContainerBlock extends Nodes.Block {
  abstract span: Span
  abstract children: Array<Node>

  instanceofContainerBlock = true
}
