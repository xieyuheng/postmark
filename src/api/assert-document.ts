import { Node, assertNode } from "../api"

export function assertDocument(node: Node, children: Array<any>): void {
  assertNode(node, { kind: "Document", children })
}
