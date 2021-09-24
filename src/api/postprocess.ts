import { Node, ContainerBlock } from "../node"
import { NodeVisitor } from "../node-visitor"
import { CodeBlockParser } from "../code-block-parser"
import * as Nodes from "../nodes"

export function postprocess(
  node: Node,
  opts: {
    codeBlockParsers: Array<CodeBlockParser<unknown>>
  }
): Node {
  const { codeBlockParsers } = opts
  // TODO
  return node
}

class Postprocessor extends NodeVisitor<Node> {
  default(node: Node): Node {
    const newNode = node.shallowCopy()

    if (ContainerBlock.isContainerBlock(newNode)) {
      newNode.children = newNode.children.map((node) => node.accept(this))
    }

    return newNode
  }

  // onCodeBlock(node: Nodes.CodeBlock): Nodes.CodeBlock {
  //   return ndoe
  // }
}
