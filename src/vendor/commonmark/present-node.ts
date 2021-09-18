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

  if (node.level) {
    result.level = node.level
  }

  if (node.listType) {
    result.listType = node.listType
  }

  if (node.listTight !== undefined) {
    result.listTight = node.listTight
  }

  if (node.listStart) {
    result.listStart = node.listStart
  }

  if (node.listDelimiter) {
    result.listDelimiter = node.listDelimiter
  }

  result.children = Commonmark.children(node).map(presentNode)

  return result
}
