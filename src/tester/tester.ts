import { Node } from "../node"
import { Parser } from "../parser"
import * as ut from "../ut"

export class Tester {
  parser: Parser

  constructor(opts: { parser: Parser }) {
    this.parser = opts.parser
  }

  assertDocument(node: Node, children: Array<any>): void {
    node.assertNode({ kind: "Document", children })
  }
}
