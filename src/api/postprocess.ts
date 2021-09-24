import { Node, ContainerBlock } from "../node"
import { NodeVisitor } from "../node"
import { CodeBlockParser } from "../code-block-parser"
import * as Nodes from "../nodes"

export function postprocess(
  node: Node,
  opts: {
    codeBlockParsers: Array<CodeBlockParser<unknown>>
  }
): Node {
  return node.accept(new Postprocessor(opts))
}

class Postprocessor extends NodeVisitor<Node> {
  codeBlockParsers: Array<CodeBlockParser<unknown>>

  constructor(opts: { codeBlockParsers: Array<CodeBlockParser<unknown>> }) {
    super()
    this.codeBlockParsers = opts.codeBlockParsers
  }

  default(node: Node): Node {
    const newNode = node.shallowCopy()

    if (ContainerBlock.isContainerBlock(newNode)) {
      newNode.children = newNode.children.map((node) => node.accept(this))
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
