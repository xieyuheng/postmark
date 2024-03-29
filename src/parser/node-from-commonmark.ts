import ty from "@xieyuheng/ty"
import { Node, Span } from "../index"
import * as Nodes from "../nodes"
import * as Commonmark from "../vendor/commonmark"

export function nodeFromCommonmark(node: Commonmark.Node): Node {
  if (node.type === "text") {
    return new Nodes.Text({
      text: ty.string().validate(node.literal),
    })
  }

  if (node.type === "code") {
    return new Nodes.Code({
      text: ty.string().validate(node.literal),
    })
  }

  if (node.type === "emph") {
    return new Nodes.Emphasis({
      children: Commonmark.children(node).map(nodeFromCommonmark),
    })
  }

  if (node.type === "strong") {
    return new Nodes.Strong({
      children: Commonmark.children(node).map(nodeFromCommonmark),
    })
  }

  if (node.type === "linebreak") {
    return new Nodes.HardLineBreak()
  }

  if (node.type === "softbreak") {
    return new Nodes.SoftLineBreak()
  }

  if (node.type === "html_inline") {
    return new Nodes.HtmlTag({
      text: ty.string().validate(node.literal),
    })
  }

  if (node.type === "image") {
    return new Nodes.Image({
      title: ty.string().validate(node.title),
      href: ty.string().validate(node.destination),
      children: Commonmark.children(node).map(nodeFromCommonmark),
    })
  }

  if (node.type === "link") {
    return new Nodes.Link({
      title: ty.string().validate(node.title),
      href: ty.string().validate(node.destination),
      children: Commonmark.children(node).map(nodeFromCommonmark),
    })
  }

  if (node.type === "code_block") {
    return new Nodes.CodeBlock({
      span: node.sourcepos && Span.fromPairs(node.sourcepos),
      // NOTE For indented-code-block, the `node.info` is not a string but a `null`.
      //   We use this bit of information to get
      //   the `isIndentedCodeBlock` field in our class.
      info: ty.string().validate(node.info || ""),
      text: ty.string().validate(node.literal),
      isIndentedCodeBlock: node.info === null,
    })
  }

  if (node.type === "html_block") {
    return new Nodes.HtmlBlock({
      span: node.sourcepos && Span.fromPairs(node.sourcepos),
      text: ty.string().validate(node.literal),
    })
  }

  if (node.type === "paragraph") {
    return new Nodes.Paragraph({
      span: node.sourcepos && Span.fromPairs(node.sourcepos),
      children: Commonmark.children(node).map(nodeFromCommonmark),
    })
  }

  if (node.type === "heading") {
    return new Nodes.Headline({
      span: node.sourcepos && Span.fromPairs(node.sourcepos),
      level: ty.number().validate(node.level),
      children: Commonmark.children(node).map(nodeFromCommonmark),
    })
  }

  if (node.type === "thematic_break") {
    return new Nodes.ThematicBreak({
      span: node.sourcepos && Span.fromPairs(node.sourcepos),
    })
  }

  if (node.type === "block_quote") {
    return new Nodes.BlockQuote({
      span: node.sourcepos && Span.fromPairs(node.sourcepos),
      children: Commonmark.children(node).map(nodeFromCommonmark),
    })
  }

  if (node.type === "list" && node.listType === "bullet") {
    return new Nodes.List({
      span: node.sourcepos && Span.fromPairs(node.sourcepos),
      tight: ty.boolean().validate(node.listTight),
      children: Commonmark.children(node).map((node) =>
        ty.instanceof(Nodes.Item).validate(nodeFromCommonmark(node))
      ),
    })
  }

  if (node.type === "item" && node.listType === "bullet") {
    return new Nodes.Item({
      span: node.sourcepos && Span.fromPairs(node.sourcepos),
      children: Commonmark.children(node).map(nodeFromCommonmark),
    })
  }

  if (node.type === "list" && node.listType === "ordered") {
    return new Nodes.OrderedList({
      span: node.sourcepos && Span.fromPairs(node.sourcepos),
      tight: ty.boolean().validate(node.listTight),
      start: ty.number().validate(node.listStart),
      delimiter: ty
        .union(ty.const("." as const), ty.const(")" as const))
        .validate(node.listDelimiter),
      children: Commonmark.children(node).map((node) =>
        ty.instanceof(Nodes.OrderedItem).validate(nodeFromCommonmark(node))
      ),
    })
  }

  if (node.type === "item" && node.listType === "ordered") {
    return new Nodes.OrderedItem({
      span: node.sourcepos && Span.fromPairs(node.sourcepos),
      number: ty.number().validate(node.listStart),
      delimiter: ty
        .union(ty.const("." as const), ty.const(")" as const))
        .validate(node.listDelimiter),
      children: Commonmark.children(node).map(nodeFromCommonmark),
    })
  }

  throw new Error(
    [
      `I meet unknown commonmark node type: ${node.type}`,
      `  sourcepos: ${JSON.stringify(node.sourcepos)}`,
    ].join("\n")
  )
}
