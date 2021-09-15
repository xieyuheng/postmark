import * as Commonmark from "../commonmark"

export function presentNode(node: Commonmark.Node): any {
  return {
    type: node.type,
    literal: node.literal,
    isContainer: node.isContainer,
    sourcepos: node.sourcepos,
    children: Commonmark.children(node).map(presentNode),
  }
}
