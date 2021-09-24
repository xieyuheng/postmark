import { Node } from "../node"
import * as Nodes from "../nodes"
import * as Commonmark from "../vendor/commonmark"
import { documentFromCommonmark } from "./document-from-commonmark"
import ty, { Schema } from "@xieyuheng/ty"
import fm from "front-matter"

export function parseDocumentWithFrontMatter<A>(
  text: string,
  opts: { attributes: Schema<A> }
): Nodes.Document<A> {
  const { attributes, body } = fm(text)
  const parser = new Commonmark.Parser()
  return documentFromCommonmark(parser.parse(body), {
    attributes: opts.attributes.validate(attributes),
  })
}
