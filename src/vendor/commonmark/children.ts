import * as Commonmark from "../commonmark"

export function children(node: Commonmark.Node): Array<Commonmark.Node> {
  const children = []

  let child = node.firstChild

  while (child) {
    children.push(child)
    child = child.next
  }

  return children
}
