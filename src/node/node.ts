import { NodeVisitor } from "../node"

export abstract class Node {
  abstract kind: string
  abstract json(): any
  abstract shallowCopy(): Node
  // abstract format(): string

  format(): string {
    return JSON.stringify(this.json())
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.default(this)
  }
}
