import { Node } from "../api"
import * as Nodes from "../nodes"
import * as Commonmark from "../vendor/commonmark"

// NOTE We define a function to avoid top-level side effects -- for circular.
function nodeClasses(): Array<{
  fromCommonmark: (node: Commonmark.Node) => undefined | Node
}> {
  return [
    Nodes.Paragraph,
    Nodes.Emphasis,
    Nodes.Strong,
    Nodes.Text,
    Nodes.ThematicBreak,
    Nodes.HardLineBreak,
    Nodes.SoftLineBreak,
    Nodes.CodeBlock,
    Nodes.Link,
    Nodes.Image,
    Nodes.Code,
    Nodes.Headline,
    Nodes.BlockQuote,
    Nodes.BulletList,
    Nodes.BulletListItem,
    Nodes.OrderedList,
    Nodes.OrderedListItem,
    Nodes.HtmlBlock,
    Nodes.HtmlTag,
  ]
}

export function documentFromCommonmark<A>(
  node: Commonmark.Node,
  opts: { attributes: A }
): Nodes.Document<A> {
  const result = Nodes.Document.fromCommonmark(node, opts)
  if (result) {
    return result
  }

  throw new Error(
    [
      `I meet unknown commonmark node type: ${node.type}`,
      `  sourcepos: ${JSON.stringify(node.sourcepos)}`,
    ].join("\n")
  )
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
