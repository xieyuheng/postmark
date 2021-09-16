import { Node, Span } from "../api"
import * as Nodes from "../nodes"
import * as Commonmark from "../vendor/commonmark"
import ty from "@xieyuheng/ty"

function nodeClasses(): Array<{
  fromCommonmark: (node: Commonmark.Node) => undefined | Node
}> {
  return [
    Nodes.Document,
    Nodes.Paragraph,
    Nodes.Emphasize,
    Nodes.Strong,
    // Nodes.Text,
    // Nodes.ThematicBreak,
    // Nodes.LineBreak,
    // Nodes.SoftBreak,
    Nodes.CodeBlock,
  ]
}

export function nodeFromCommonmark(node: Commonmark.Node): Node {
  for (const nodeClass of nodeClasses()) {
    const result = nodeClass.fromCommonmark(node)
    if (result) {
      return result
    }
  }

  if (node.type === "text") {
    return new Nodes.Text({
      value: ty.string().validate(node.literal),
    })
  } else if (node.type === "thematic_break") {
    return new Nodes.ThematicBreak({
      span: node.sourcepos && Span.fromPairs(node.sourcepos),
    })
  } else if (node.type === "linebreak") {
    return new Nodes.LineBreak()
  } else if (node.type === "softbreak") {
    return new Nodes.SoftBreak()
  } else {
    throw new Error(
      [
        `I meet unknown commonmark node type: ${node.type}`,
        `  sourcepos: ${JSON.stringify(node.sourcepos)}`,
      ].join("\n")
    )
  }
}
