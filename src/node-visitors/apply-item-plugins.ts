import { Node } from "../node"
import { NodeVisitor } from "../node-visitor"
import * as Nodes from "../nodes"
import { Parser } from "../parser"
import { Plugin } from "../plugins"
import { TaggedItem } from "../tagged-item"

export class ApplyItemPlugins extends NodeVisitor<Node> {
  private plugins: Array<Plugin>

  constructor(opts: { parser: Parser; plugins: Array<Plugin> }) {
    super({ parser: opts.parser })
    this.plugins = opts.plugins
  }

  default(node: Node): Node {
    const newNode = node.shallowCopy()
    newNode.children = newNode.children.map((child) => child.accept(this))
    return newNode
  }

  onItem(node: Nodes.Item): Node {
    for (const plugin of this.plugins) {
      if (plugin.kind === "CustomItem") {
        const taggedItem = TaggedItem.build(node)
        if (plugin.recognize(taggedItem)) {
          return new Nodes.CustomItem({
            ...node,
            customKind: plugin.customKind,
            item: node,
            taggedItem,
            value: plugin.build ? plugin.build(taggedItem) : null,
          })
        }
      }
    }

    return this.default(node)
  }
}
