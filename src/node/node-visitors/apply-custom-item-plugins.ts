import { Node, NodeVisitor } from ".."
import { Parser } from "../../parser"
import * as Plugins from "../../plugins"

export class ApplyCustomItemPlugins extends NodeVisitor<Node> {
  customItemPlugins: Array<Plugins.CustomItemPlugin<unknown>>

  constructor(opts: {
    parser: Parser
    customItemPlugins: Array<Plugins.CustomItemPlugin<unknown>>
  }) {
    super({ parser: opts.parser })
    this.customItemPlugins = opts.customItemPlugins
  }

  default(node: Node): Node {
    const newNode = node.shallowCopy()
    newNode.children = newNode.children.map((child) => child.accept(this))
    return newNode
  }

  // TODO
  // onItem()
}
