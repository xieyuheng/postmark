import { Node } from "../node"
import * as Nodes from "../nodes"
import * as Commonmark from "../vendor/commonmark"
import { documentFromCommonmark } from "./document-from-commonmark"
import { nodeFromCommonmark } from "./node-from-commonmark"
import frontMatter from "front-matter"
import * as Postprocessors from "../postprocessors"
import { CustomBlockParser } from "../custom-block-parser"

export interface ParserOptions {
  customBlockParsers?: Array<CustomBlockParser<unknown>>
  enableTable?: boolean
}

export class Parser {
  customBlockParsers: Array<CustomBlockParser<unknown>>
  enableTable: boolean

  constructor(opts: ParserOptions) {
    this.customBlockParsers = opts.customBlockParsers || []
    this.enableTable = Boolean(opts.enableTable)
  }

  static create(opts: ParserOptions): Parser {
    return new Parser(opts)
  }

  private postprocess(node: Node): Node {
    if (this.customBlockParsers.length > 0) {
      node = node.accept(
        new Postprocessors.CustomBlockPostprocessor({
          parser: this,
          customBlockParsers: this.customBlockParsers,
        })
      )
    }

    if (this.enableTable) {
      node = node.accept(
        new Postprocessors.TablePostprocessor({
          parser: this,
        })
      )
    }

    return node
  }

  parseNode(text: string): Node {
    const commonmarkParser = new Commonmark.Parser()
    const node = nodeFromCommonmark(commonmarkParser.parse(text))
    return this.postprocess(node)
  }

  parseDocument(text: string): Nodes.Document {
    const { attributes, body } = frontMatter(text)
    const commonmarkParser = new Commonmark.Parser()
    const node = documentFromCommonmark(commonmarkParser.parse(body), {
      attributes,
    })
    return this.postprocess(node) as any
  }
}
