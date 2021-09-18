import { Node, Span } from "../api"
import * as Nodes from "../nodes"
import * as Commonmark from "../vendor/commonmark"
import ty from "@xieyuheng/ty"

// NOTE We define a function to avoid top-level side effects -- for circular.
function nodeClasses(): Array<{
  fromCommonmark: (node: Commonmark.Node) => undefined | Node
}> {
  return [
    Nodes.Document,
    Nodes.Paragraph,
    Nodes.Emphasize,
    Nodes.Strong,
    Nodes.Text,
    Nodes.ThematicBreak,
    Nodes.LineBreak,
    Nodes.SoftBreak,
    Nodes.CodeBlock,
    Nodes.Link,
    Nodes.Image,
    Nodes.Code,
    Nodes.Heading,
    Nodes.BlockQuote,
    Nodes.BulletList,
    Nodes.BulletListItem,
    Nodes.OrderedList,
    Nodes.OrderedListItem,
    Nodes.HtmlBlock,
    Nodes.HtmlInline,
  ]
}

export function nodeFromCommonmark(node: Commonmark.Node): Node {
  for (const nodeClass of nodeClasses()) {
    const result = nodeClass.fromCommonmark(node)
    if (result) {
      return result
    }
  }

  throw new Error(
    [
      `I meet unknown commonmark node type: ${node.type}`,
      `  sourcepos: ${JSON.stringify(node.sourcepos)}`,
    ].join("\n")
  )
}
