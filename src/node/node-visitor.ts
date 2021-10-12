import { Node } from "../node"
import * as Nodes from "../nodes"

export abstract class NodeVisitor<T> {
  default(node: Node): T {
    throw new Error("The default visiting method is not implemented")
  }

  onDocument?<A>(node: Nodes.Document<A>): T

  // NOTE container-block
  onBlockQuote?(node: Nodes.BlockQuote): T
  onBulletList?(node: Nodes.BulletList): T
  onBulletListItem?(node: Nodes.BulletListItem): T
  onOrderedList?(node: Nodes.OrderedList): T
  onOrderedListItem?(node: Nodes.OrderedListItem): T

  // NOTE leaf-block
  onParagraph?(node: Nodes.Paragraph): T
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
