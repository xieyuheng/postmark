import { Node, Span } from "../node"

export abstract class Inline extends Node {
  instanceofInline = true

  abstract kind: string
  abstract json(): any

  static isInline(node: Node): node is Inline {
    return (node as Inline).instanceofInline
  }
}
