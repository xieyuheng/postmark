import { Node, ContainerBlock } from "../node"
import { NodeVisitor } from "../node"
import { Parser } from "../parser"
import * as Nodes from "../nodes"
import { CustomBlockParser } from "../custom-block-parser"

export class CustomBlockPostprocessor extends NodeVisitor<Node> {
  customBlockParsers: Array<CustomBlockParser<unknown>>

  private codeBlockCounter = 0

  constructor(opts: {
    parser: Parser
    customBlockParsers: Array<CustomBlockParser<unknown>>
  }) {
    super({ parser: opts.parser })
    this.customBlockParsers = opts.customBlockParsers
  }

  default(node: Node): Node {
    const newNode = node.shallowCopy()
    newNode.children = newNode.children.map((child) => child.accept(this))
    return newNode
  }

  onCodeBlock(node: Nodes.CodeBlock): Node {
    this.codeBlockCounter++

    for (const customBlockParser of this.customBlockParsers) {
      if (customBlockParser.recognize(node.info)) {
        return new Nodes.CustomBlock({
          ...node,
          customKind: customBlockParser.customKind,
          value: customBlockParser.parse(node.text, {
            index: this.codeBlockCounter - 1,
          }),
        })
      }
    }

    return this.default(node)
  }
}
