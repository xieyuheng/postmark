import { Node } from "../node"
import * as Nodes from "../nodes"
import * as Commonmark from "../vendor/commonmark"
import { documentFromCommonmark } from "./document-from-commonmark"
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

  parseDocument(text: string): Nodes.Document {
    const { attributes, body } = frontMatter(text)

    const commonmarkParser = new Commonmark.Parser()

    let document: Node = documentFromCommonmark(commonmarkParser.parse(body), {
      attributes,
    })

    if (this.customBlockParsers.length > 0) {
      document = document.accept(
        new Postprocessors.CustomBlockPostprocessor({
          customBlockParsers: this.customBlockParsers,
        })
      )
    }

    if (this.enableTable) {
      document = document.accept(new Postprocessors.TablePostprocessor())
    }

    return document as any
  }
}
