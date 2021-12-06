import { Inline, Node } from "../../node"

export abstract class LineBreak extends Inline {
  instanceofLineBreak = true

  static isLineBreak(node: Node): node is LineBreak {
    return (node as LineBreak).instanceofLineBreak
  }
}
