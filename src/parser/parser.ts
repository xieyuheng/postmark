import * as Nodes from "../nodes"
import * as Commonmark from "../vendor/commonmark"
import { documentFromCommonmark } from "./document-from-commonmark"
import { Schema } from "@xieyuheng/ty"
import fm from "front-matter"

export class Parser {
  commonmarkParser = new Commonmark.Parser()

  parseDocument(text: string): Nodes.Document<{}> {
    return documentFromCommonmark(this.commonmarkParser.parse(text), {
      attributes: {},
    })
  }

  parseDocumentWithFrontMatter<A>(
    text: string,
    opts: { attributes: Schema<A> }
  ): Nodes.Document<A> {
    const { attributes, body } = fm(text)

    return documentFromCommonmark(this.commonmarkParser.parse(body), {
      attributes: opts.attributes.validate(attributes),
    })
  }
}
