import { Node } from "../../node"
import * as Nodes from "../../nodes"

export abstract class LineBreak extends Nodes.Inline {
  instanceofLineBreak = true

  static isLineBreak(node: Node): node is LineBreak {
    return (node as LineBreak).instanceofLineBreak
  }
}
