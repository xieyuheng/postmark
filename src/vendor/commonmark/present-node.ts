import * as Commonmark from "../commonmark"

export function presentNode(node: Commonmark.Node): any {
  const result: any = {}

  result.type = node.type
  result.isContainer = node.isContainer

  if (node.sourcepos) {
    result.sourcepos = node.sourcepos
  }

  if (node.literal) {
    result.literal = node.literal
  }

  if (node.title) {
    result.title = node.title
  }

  if (node.destination) {
    result.destination = node.destination
  }

  result.children = Commonmark.children(node).map(presentNode)

  return result
}
