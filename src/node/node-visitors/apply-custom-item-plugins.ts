import { Node, NodeVisitor } from "../../node"
import * as Nodes from "../../nodes"
import { Parser } from "../../parser"
import * as Plugins from "../../plugins"
import { TaggedItem } from "../../plugins/tagged-item"

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

  onItem(node: Nodes.Item): Node {
    for (const plugin of this.customItemPlugins) {
      const taggedItem = TaggedItem.build(node)
      if (plugin.recognize(taggedItem)) {
        return new Nodes.CustomItem({
          ...node,
          customKind: plugin.customKind,
          item: node,
          taggedItem,
          value: plugin.parse(taggedItem),
        })
      }
    }

    return this.default(node)
  }
}
