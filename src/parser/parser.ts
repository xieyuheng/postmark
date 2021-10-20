import * as Nodes from "../nodes"
import * as Commonmark from "../vendor/commonmark"
import { documentFromCommonmark } from "./document-from-commonmark"
import ty, { Schema } from "@xieyuheng/ty"
import frontMatter from "front-matter"

export class Parser {
  commonmarkParser = new Commonmark.Parser()

  parseDocumentWithFrontMatter<A>(
    text: string,
    opts: { attributes: Schema<A>; enableTable?: boolean }
  ): Nodes.Document<A> {
    const { attributes, body } = frontMatter(text)

    let document = documentFromCommonmark(this.commonmarkParser.parse(body), {
      attributes: opts.attributes.validate(attributes),
    })

    document = document.postprocess({
      enableTable: opts.enableTable,
    })

    return document
  }

  parseDocument(
    text: string,
    opts?: { enableTable?: boolean }
  ): Nodes.Document {
    return this.parseDocumentWithFrontMatter(text, {
      attributes: ty.any(),
      enableTable: opts?.enableTable,
    })
  }
}
