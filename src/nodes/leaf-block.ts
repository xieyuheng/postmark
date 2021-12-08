import { Span } from "../node"
import * as Nodes from "../nodes"

export abstract class LeafBlock extends Nodes.Block {
  abstract span: Span

  instanceofLeafBlock = true
}
