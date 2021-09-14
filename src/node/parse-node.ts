import { Node, Span, Position } from "../node"
import * as Nodes from "../nodes"
import * as Commonmark from "commonmark"
import ty from "@xieyuheng/ty"

export function parseNode(text: string): Node {
  const reader = new Commonmark.Parser()
  return createNode(reader.parse(text))
}

export function createNode(node: Commonmark.Node): Node {
  const span = node.sourcepos && createSpan(node.sourcepos)
  const children = commonmarkChildren(node).map(createNode)

  if (node.type === "document") {
    return new Nodes.Document({ span, children })
  } else if (node.type === "paragraph") {
    return new Nodes.Paragraph({ span, children })
  } else if (node.type === "emph") {
    return new Nodes.Emphasize({ children })
  } else if (node.type === "strong") {
    return new Nodes.Strong({ children })
  } else if (node.type === "text") {
    const value = ty.string().validate(node.literal)
    return new Nodes.Text({ value })
  } else if (node.type === "thematic_break") {
    return new Nodes.ThematicBreak({ span })
  } else {
    return new Nodes.Paragraph({ span, children })
  }
}

function createSpan(sourcepos: [[number, number], [number, number]]): Span {
  const [[startline, startcolumn], [endline, endcolumn]] = sourcepos
  return new Span(
    new Position(startline, startcolumn),
    new Position(endline, endcolumn)
  )
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
