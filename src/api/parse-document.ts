import { Node } from "../node"
import * as Nodes from "../nodes"
import * as Commonmark from "../vendor/commonmark"
import { documentFromCommonmark } from "./document-from-commonmark"

export function parseDocument(text: string): Nodes.Document<{}> {
  const parser = new Commonmark.Parser()
  return documentFromCommonmark(parser.parse(text), { attributes: {} })
}
