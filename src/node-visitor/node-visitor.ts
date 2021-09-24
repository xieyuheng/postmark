import { Node } from "../node"
import * as Nodes from "../nodes"

export abstract class NodeVisitor<T> {
  abstract default(node: Node): T

  abstract onDocument<A>(node: Nodes.Document<A>): T

  abstract onBlockQuote(node: Nodes.BlockQuote): T
  abstract onBulletList(node: Nodes.BulletList): T
  abstract onBulletListItem(node: Nodes.BulletListItem): T
  abstract onOrderedList(node: Nodes.OrderedList): T
  abstract onOrderedListItem(node: Nodes.OrderedListItem): T

  abstract onParagraph(node: Nodes.Paragraph): T
  abstract onHeadline(node: Nodes.Headline): T
  abstract onThematicBreak(node: Nodes.ThematicBreak): T
  abstract onHtmlBlock(node: Nodes.HtmlBlock): T
  abstract onCodeBlock(node: Nodes.CodeBlock): T

  abstract onEmphasis(node: Nodes.Emphasis): T
  abstract onStrong(node: Nodes.Strong): T
  abstract onHardLineBreak(node: Nodes.HardLineBreak): T
  abstract onSoftLineBreak(node: Nodes.SoftLineBreak): T
  abstract onLink(node: Nodes.Link): T
  abstract onImage(node: Nodes.Image): T
  abstract onCode(node: Nodes.Code): T
  abstract onHtmlTag(node: Nodes.HtmlTag): T
  abstract onText(node: Nodes.Text): T    

  // "./inlines/html-tag"
  // "./inlines/text"
}
