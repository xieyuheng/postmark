import { Node, assertNode } from "../api"
import * as ut from "../ut"

export function assertDocument(node: Node, children: Array<any>): void {
  assertNode(node, { kind: "Document", children })
}
