import { Node, ContainerBlock } from "../node"
import { NodeVisitor } from "../node"
import * as Nodes from "../nodes"
import { CodeBlockParser } from "../code-block-parser"

export function postprocess<T extends Node>(
  node: T,
  opts: {
    codeBlockParsers: Array<CodeBlockParser<unknown>>
  }
): T {
  const postprocessor = new Postprocessor(opts)
  return node.accept(postprocessor) as T
}

class Postprocessor extends NodeVisitor<Node> {
  codeBlockParsers: Array<CodeBlockParser<unknown>>

  constructor(opts: { codeBlockParsers: Array<CodeBlockParser<unknown>> }) {
    super()
    this.codeBlockParsers = opts.codeBlockParsers
  }

  default(node: Node): Node {
    const newNode = node.shallowCopy()

    if (
      newNode instanceof Nodes.Document ||
      ContainerBlock.isContainerBlock(newNode)
    ) {
      newNode.children = newNode.children.map((child) => child.accept(this))
    }

    return newNode
  }

  onCodeBlock(node: Nodes.CodeBlock): Node {
    for (const codeBlockParser of this.codeBlockParsers) {
      if (codeBlockParser.recognize(node.info)) {
        return new Nodes.CustomBlock({
          ...node,
          customKind: codeBlockParser.customKind,
          value: codeBlockParser.parse(node.text),
        })
      }
    }

    return this.default(node)
  }
}
