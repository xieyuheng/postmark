import { Node, ContainerBlock } from "../node"
import { NodeVisitor } from "../node"
import * as Nodes from "../nodes"
import { CustomBlockParser } from "../custom-block-parser"

export function postprocess<T extends Node>(
  node: T,
  opts: {
    customBlockParsers: Array<CustomBlockParser<unknown>>
  }
): T {
  const postprocessor = new Postprocessor(opts)
  return node.accept(postprocessor) as T
}

class Postprocessor extends NodeVisitor<Node> {
  customBlockParsers: Array<CustomBlockParser<unknown>>

  constructor(opts: { customBlockParsers: Array<CustomBlockParser<unknown>> }) {
    super()
    this.customBlockParsers = opts.customBlockParsers
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
    for (const customBlockParser of this.customBlockParsers) {
      if (customBlockParser.recognize(node.info)) {
        return new Nodes.CustomBlock({
          ...node,
          customKind: customBlockParser.customKind,
          value: customBlockParser.parse(node.text),
        })
      }
    }

    return this.default(node)
  }
}
