import { Node } from "../node"
import * as Nodes from "../nodes"
import { Tag } from "./tag"

export class Content {
  fullText: string
  nodes: Array<Node>

  constructor(fullNodes: Array<Node>) {
    this.fullText = fullNodes.map((node) => node.format()).join("\n\n")
    this.nodes = trimNodes(fullNodes)
  }

  get text(): string {
    return Tag.trim(this.fullText)
  }

  json() {
    return this.text
  }
}

function trimNodes(nodes: Array<Node>): Array<Node> {
  return trimEndNodes(trimStartNodes(nodes))
}

function isTagStart(node: Node): boolean {
  return node instanceof Nodes.Text && node.text.trim() === "["
}

function isTagEnd(node: Node): boolean {
  return node instanceof Nodes.Text && node.text.trim() === "]"
}

function trimStartNodes(nodes: Array<Node>): Array<Node> {
  const firstNode = nodes[0]
  if (firstNode === undefined) {
    return nodes
  }

  if (firstNode instanceof Nodes.Paragraph) {
    const firstText = firstNode.children[0]

    if (isTagStart(firstText)) {
      const newNode = firstNode.shallowCopy()
      newNode.children = [...newNode.children]
      let child = newNode.children.shift()
      while (child && !isTagEnd(child)) {
        child = newNode.children.shift()
        if (child === undefined) {
          return nodes
        }
      }

      return [newNode, ...nodes.slice(1)]
    }
  }

  return nodes
}

function trimEndNodes(nodes: Array<Node>): Array<Node> {
  const lastNode = nodes[nodes.length - 1]
  if (lastNode === undefined) {
    return nodes
  }

  if (lastNode instanceof Nodes.Paragraph) {
    const lastText = lastNode.children[lastNode.children.length - 1]

    if (isTagEnd(lastText)) {
      const newNode = lastNode.shallowCopy()
      newNode.children = [...newNode.children]
      let child = newNode.children.pop()
      while (child && !isTagStart(child)) {
        child = newNode.children.pop()
        if (child === undefined) {
          return nodes
        }
      }

      return [newNode, ...nodes.slice(1)]
    }
  }

  return nodes
}
