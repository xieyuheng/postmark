import { Node } from "../node"
import * as Nodes from "../nodes"
import { Parser } from "../parser"

export abstract class NodeVisitor<T> {
  parser: Parser

  constructor(opts: { parser: Parser }) {
    this.parser = opts.parser
  }

  default(node: Node): T {
    throw new Error("The default visiting method is not implemented")
  }

  onDocument?(node: Nodes.Document): T

  // NOTE container-block
  onBlockQuote?(node: Nodes.BlockQuote): T
  onBulletList?(node: Nodes.BulletList): T
  onBulletListItem?(node: Nodes.BulletListItem): T
  onOrderedList?(node: Nodes.OrderedList): T
  onOrderedListItem?(node: Nodes.OrderedListItem): T
  onCustomList?<A>(node: Nodes.CustomList<A>): T

  // onList(node: Nodes.List): T {
  //   return this.default(node)
  // }

  // NOTE leaf-block
  onParagraph?(node: Nodes.Paragraph): T
  onTable?(node: Nodes.Table): T
  onHeadline?(node: Nodes.Headline): T
  onThematicBreak?(node: Nodes.ThematicBreak): T
  onHtmlBlock?(node: Nodes.HtmlBlock): T
  onCodeBlock?(node: Nodes.CodeBlock): T
  onCustomBlock?<A>(node: Nodes.CustomBlock<A>): T

  // NOTE inline
  onEmphasis?(node: Nodes.Emphasis): T
  onStrong?(node: Nodes.Strong): T
  onHardLineBreak?(node: Nodes.HardLineBreak): T
  onSoftLineBreak?(node: Nodes.SoftLineBreak): T
  onLink?(node: Nodes.Link): T
  onImage?(node: Nodes.Image): T
  onCode?(node: Nodes.Code): T
  onHtmlTag?(node: Nodes.HtmlTag): T
  onText?(node: Nodes.Text): T
}
