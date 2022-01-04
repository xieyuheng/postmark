import { Node } from "../node"
import { NodeVisitor } from "../node-visitor"
import * as Nodes from "../nodes"
import { Parser } from "../parser"
import { TaggedItem } from "../tagged-item"

export class ApplyItemPlugins extends NodeVisitor<Node> {
  constructor(parser: Parser) {
    super({ parser })
  }

  default(node: Node): Node {
    const newNode = node.shallowCopy()
    newNode.children = newNode.children.map((child) => child.accept(this))
    return newNode
  }

  onItem(node: Nodes.Item): Node {
    for (const plugin of this.parser.plugins) {
      if (plugin.kind === "CustomItem") {
        const previous: Array<TaggedItem> = []

        const taggedItem = TaggedItem.build(node)
        if (plugin.recognize(taggedItem)) {
          return new Nodes.CustomItem({
            ...node,
            customKind: plugin.customKind,
            item: node,
            taggedItem,
            value: plugin.build ? plugin.build(taggedItem, { previous }) : null,
          })
        }
      }
    }

    return this.default(node)
  }
}
