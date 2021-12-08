import { Node, NodeVisitor } from ".."
import { Parser } from "../../parser"
import * as Plugins from "../../plugins"

export class ApplyCustomItemPlugins extends NodeVisitor<Node> {
  customListPlugins: Array<Plugins.CustomItemPlugin<unknown>>

  constructor(opts: {
    parser: Parser
    customListPlugins: Array<Plugins.CustomItemPlugin<unknown>>
  }) {
    super({ parser: opts.parser })
    this.customListPlugins = opts.customListPlugins
  }

  default(node: Node): Node {
    const newNode = node.shallowCopy()
    newNode.children = newNode.children.map((child) => child.accept(this))
    return newNode
  }

  // TODO
  // onItem()
}
