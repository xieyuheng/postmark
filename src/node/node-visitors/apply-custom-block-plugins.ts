import { Node, NodeVisitor } from "../../node"
import * as Nodes from "../../nodes"
import { Parser } from "../../parser"
import * as Plugins from "../../plugins"

export class ApplyCustomBlockPlugins extends NodeVisitor<Node> {
  customBlockPlugins: Array<Plugins.CustomBlockPlugin<unknown>>

  private codeBlockCounter = 0

  constructor(opts: {
    parser: Parser
    customBlockPlugins: Array<Plugins.CustomBlockPlugin<unknown>>
  }) {
    super({ parser: opts.parser })
    this.customBlockPlugins = opts.customBlockPlugins
  }

  default(node: Node): Node {
    const newNode = node.shallowCopy()
    newNode.children = newNode.children.map((child) => child.accept(this))
    return newNode
  }

  onCodeBlock(node: Nodes.CodeBlock): Node {
    this.codeBlockCounter++

    for (const customBlockPlugin of this.customBlockPlugins) {
      if (customBlockPlugin.recognize(node.info)) {
        return new Nodes.CustomBlock({
          ...node,
          customKind: customBlockPlugin.customKind,
          value: customBlockPlugin.parse(node.text, {
            index: this.codeBlockCounter - 1,
          }),
        })
      }
    }

    return this.default(node)
  }
}
