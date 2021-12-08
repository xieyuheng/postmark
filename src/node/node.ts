import { NodeVisitor } from "./node-visitor"
const { marked } = require("marked")
import * as ut from "../ut"

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

  assertNode(json: any): void {
    if (!ut.equal(this.json(), json)) {
      throw new Error(
        [
          `The node's json is not equal to given json.`,
          `  node's json: ${JSON.stringify(this.json())}`,
          `  given  json: ${JSON.stringify(json)}`,
        ].join("\n")
      )
    }
  }
}
