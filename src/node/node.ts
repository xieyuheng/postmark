import { NodeVisitor } from "../node"

export abstract class Node {
  abstract kind: string
  abstract json(): any
  abstract shallowCopy(): Node
  abstract format(): string

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.default(this)
  }
}
