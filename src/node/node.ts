import { NodeVisitor } from "../node-visitor"
const { marked } = require("marked")

export abstract class Node {
  abstract kind: string
  abstract json(): any
  abstract shallowCopy(): Node
  abstract format(): string

  children: Array<Node> = []

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.default(this)
  }

  render(): string {
    const text = this.format()

    const tokens = marked.lexer(text)
    const html = marked.parser(tokens)

    return html
  }
}
