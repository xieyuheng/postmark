import { Node } from "../node"
import { NodeVisitor } from "../node-visitor"
import * as Nodes from "../nodes"
import { Parser } from "../parser"

export class ApplyBlockPlugins extends NodeVisitor<Node> {
  private codeBlockCounter = 0

  constructor(parser: Parser) {
    super({ parser })
  }

  default(node: Node): Node {
    const newNode = node.shallowCopy()
    newNode.children = newNode.children.map((child) => child.accept(this))
    return newNode
  }

  onCodeBlock(node: Nodes.CodeBlock): Node {
    this.codeBlockCounter++

    for (const plugin of this.parser.plugins) {
      if (plugin.kind === "CustomBlock") {
        if (plugin.recognize(node)) {
          return new Nodes.CustomBlock({
            ...node,
            customKind: plugin.customKind,
            value: plugin.parse
              ? plugin.parse(node.text, {
                  index: this.codeBlockCounter - 1,
                })
              : null,
          })
        }
      }
    }

    return this.default(node)
  }
}
