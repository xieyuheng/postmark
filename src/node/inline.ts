import { Node } from "../node"

export abstract class Inline extends Node {
  instanceofInline = true

  static isInline(node: Node): node is Inline {
    return (node as Inline).instanceofInline
  }
}
