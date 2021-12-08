import { Node, NodeVisitor } from "../../node"
import * as Nodes from "../../nodes"
import { Parser } from "../../parser"
import * as Plugins from "../../plugins"

export class ApplyCustomListPlugins extends NodeVisitor<Node> {
  customListPlugins: Array<Plugins.CustomListPlugin<unknown>>

  constructor(opts: {
    parser: Parser
    customListPlugins: Array<Plugins.CustomListPlugin<unknown>>
  }) {
    super({ parser: opts.parser })
    this.customListPlugins = opts.customListPlugins
  }

  default(node: Node): Node {
    const newNode = node.shallowCopy()
    newNode.children = newNode.children.map((child) => child.accept(this))
    return newNode
  }

  onList(node: Nodes.List): Node {
    for (const customListPlugin of this.customListPlugins) {
      if (customListPlugin.recognize(node)) {
        return new Nodes.CustomList({
          customKind: customListPlugin.customKind,
          span: node.span,
          list: node,
          value: customListPlugin.parse(node),
        })
      }
    }

    return this.default(node)
  }
}
