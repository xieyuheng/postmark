import { Node, Span } from "../node"
import * as Nodes from "../nodes"
import * as Commonmark from "../vendor/commonmark"
import { nodeFromCommonmark } from "./node-from-commonmark"

export function documentFromCommonmark<A>(
  node: Commonmark.Node,
  opts: { attributes: A }
): Nodes.Document<A> {
  if (node.type === "document") {
    return new Nodes.Document({
      attributes: opts.attributes,
      span: node.sourcepos && Span.fromPairs(node.sourcepos),
      children: Commonmark.children(node).map(nodeFromCommonmark),
    })
  }

  throw new Error(
    [
      `I meet unknown commonmark node type: ${node.type}`,
      `  sourcepos: ${JSON.stringify(node.sourcepos)}`,
    ].join("\n")
  )
}
