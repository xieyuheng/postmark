import { Node } from "../node"
import * as Nodes from "../nodes"
import * as Commonmark from "commonmark"

export function parseNode(text: string): Node {
  const reader = new Commonmark.Parser()
  return createNode(reader.parse(text))
}

export function createNode(node: Commonmark.Node): Node {
  if (node.type === "document") {
    return new Nodes.Document({
      children: commonmarkChildren(node).map(createNode),
    })
  } else if (node.type === "paragraph") {
    return new Nodes.Paragraph({
      children: commonmarkChildren(node).map(createNode),
    })
  } else {
    return new Nodes.Paragraph({
      children: [],
    })
  }
}

function commonmarkChildren(node: Commonmark.Node): Array<Commonmark.Node> {
  const children = []

  let child = node.firstChild

  while (child) {
    children.push(child)
    child = child.next
  }

  return children
}
