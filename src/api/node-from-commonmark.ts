import { Node, Span } from "../api"
import * as Nodes from "../nodes"
import * as Commonmark from "../vendor/commonmark"
import ty from "@xieyuheng/ty"

function nodeClasses(): Array<{
  fromCommonmark: (node: Commonmark.Node) => undefined | Node
}> {
  return [
    Nodes.Document,
    // Nodes.Paragraph,
    // Nodes.Emphasize,
    // Nodes.Strong,
    // Nodes.Text,
    // Nodes.ThematicBreak,
    // Nodes.LineBreak,
    // Nodes.SoftBreak,
    // Nodes.CodeBlock,
  ]
}

export function nodeFromCommonmark(node: Commonmark.Node): Node {
  const span = node.sourcepos && Span.fromPairs(node.sourcepos)
  const children = Commonmark.children(node).map(nodeFromCommonmark)

  for (const nodeClass of nodeClasses()) {
    const result = nodeClass.fromCommonmark(node)
    if (result) {
      return result
    }
  }

  if (node.type === "paragraph") {
    return new Nodes.Paragraph({ span, children })
  } else if (node.type === "emph") {
    return new Nodes.Emphasize({ children })
  } else if (node.type === "strong") {
    return new Nodes.Strong({ children })
  } else if (node.type === "text") {
    const value = ty.string().validate(node.literal)
    return new Nodes.Text({ value })
  } else if (node.type === "thematic_break") {
    return new Nodes.ThematicBreak({ span })
  } else if (node.type === "linebreak") {
    return new Nodes.LineBreak()
  } else if (node.type === "softbreak") {
    return new Nodes.SoftBreak()
  } else if (node.type === "code_block") {
    const info = ty.string().validate(node.info)
    const value = ty.string().validate(node.literal)
    return new Nodes.CodeBlock({ span, info, value })
  } else {
    throw new Error(
      [
        `I meet unknown commonmark node type: ${node.type}`,
        `  sourcepos: ${JSON.stringify(node.sourcepos)}`,
      ].join("\n")
    )
  }
}
