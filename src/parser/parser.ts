import * as Nodes from "../nodes"
import * as Commonmark from "../vendor/commonmark"
import { documentFromCommonmark } from "./document-from-commonmark"
import ty, { Schema } from "@xieyuheng/ty"
import frontMatter from "front-matter"

export class Parser {
  commonmarkParser = new Commonmark.Parser()

  parseDocumentWithFrontMatter<A>(
    text: string,
    opts: { attributes: Schema<A> }
  ): Nodes.Document<A> {
    const { attributes, body } = frontMatter(text)

    return documentFromCommonmark(this.commonmarkParser.parse(body), {
      attributes: opts.attributes.validate(attributes),
    })
  }

  parseDocument(text: string): Nodes.Document {
    return this.parseDocumentWithFrontMatter(text, { attributes: ty.any() })
  }
}
