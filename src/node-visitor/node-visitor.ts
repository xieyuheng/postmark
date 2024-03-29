import { Node } from "../node"
import * as Nodes from "../nodes"
import { Parser } from "../parser"

// prettier-ignore
export abstract class NodeVisitor<T> {
  parser: Parser

  constructor(opts: { parser: Parser }) {
    this.parser = opts.parser
  }

  default(node: Node): T {
    throw new Error("The default visiting method is not implemented")
  }

  onDocument(node: Nodes.Document): T { return this.default(node) }

  // NOTE container-block
  onBlockQuote(node: Nodes.BlockQuote): T { return this.default(node) }
  onList(node: Nodes.List): T { return this.default(node) }
  onItem(node: Nodes.Item): T { return this.default(node) }
  onOrderedList(node: Nodes.OrderedList): T { return this.onList(node) }
  onOrderedItem(node: Nodes.OrderedItem): T { return this.onItem(node) }
  onCustomItem<A>(node: Nodes.CustomItem<A>): T { return this.onItem(node) }

  // NOTE leaf-block
  onParagraph(node: Nodes.Paragraph): T { return this.default(node) }
  onTable(node: Nodes.Table): T { return this.default(node) }
  onHeadline(node: Nodes.Headline): T { return this.default(node) }
  onThematicBreak(node: Nodes.ThematicBreak): T { return this.default(node) }
  onHtmlBlock(node: Nodes.HtmlBlock): T { return this.default(node) }
  onCodeBlock(node: Nodes.CodeBlock): T { return this.default(node) }
  onCustomBlock<A>(node: Nodes.CustomBlock<A>): T { return this.onCodeBlock(node) }

  // NOTE inline
  onEmphasis(node: Nodes.Emphasis): T { return this.default(node) }
  onStrong(node: Nodes.Strong): T { return this.default(node) }
  onHardLineBreak(node: Nodes.HardLineBreak): T { return this.default(node) }
  onSoftLineBreak(node: Nodes.SoftLineBreak): T { return this.default(node) }
  onLink(node: Nodes.Link): T { return this.default(node) }
  onImage(node: Nodes.Image): T { return this.default(node) }
  onCode(node: Nodes.Code): T { return this.default(node) }
  onHtmlTag(node: Nodes.HtmlTag): T { return this.default(node) }
  onText(node: Nodes.Text): T { return this.default(node) }
}
