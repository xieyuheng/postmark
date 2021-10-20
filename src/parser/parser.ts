import * as Nodes from "../nodes"
import * as Commonmark from "../vendor/commonmark"
import { documentFromCommonmark } from "./document-from-commonmark"
import frontMatter from "front-matter"

export interface ParserOptions {
  enableTable?: boolean
}

export class Parser {
  commonmarkParser = new Commonmark.Parser()

  enableTable: boolean

  constructor(opts: ParserOptions) {
    this.enableTable = Boolean(opts.enableTable)
  }

  static create(opts: ParserOptions): Parser {
    return new Parser(opts)
  }

  parseDocument(text: string): Nodes.Document {
    const { attributes, body } = frontMatter(text)

    let document = documentFromCommonmark(this.commonmarkParser.parse(body), {
      attributes,
    })

    document = document.postprocess({ enableTable: this.enableTable })

    return document
  }
}
