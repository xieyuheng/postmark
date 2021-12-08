import { Node, NodeVisitor } from "../../node"
import { Parser } from "../../parser"
import * as Plugins from "../../plugins"

// TODO ApplyCustomTaggedItemPlugins

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
}
