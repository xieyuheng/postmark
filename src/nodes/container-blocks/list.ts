import { Span } from "../../node"
import * as Nodes from "../../nodes"

export abstract class List extends Nodes.ContainerBlock {
  instanceofList = true

  abstract span: Span
}
