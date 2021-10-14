import { Node } from "../node"
import { Parser } from "../parser"
import * as ut from "../ut"

export class Tester {
  parser: Parser

  constructor(opts: { parser: Parser }) {
    this.parser = opts.parser
  }

  assertDocument(node: Node, children: Array<any>): void {
    this.assertNode(node, { kind: "Document", children })
  }

  assertNode(node: Node, json: any): void {
    if (!ut.equal(node.json(), json)) {
      throw new Error(
        [
          `The node's json is not equal to given json.`,
          `  node's json: ${JSON.stringify(node.json())}`,
          `  given  json: ${JSON.stringify(json)}`,
        ].join("\n")
      )
    }
  }
}
