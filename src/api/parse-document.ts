import { Node, nodeFromCommonmark } from "../api"
import * as Commonmark from "../vendor/commonmark"

export function parseDocument(text: string): Node {
  const parser = new Commonmark.Parser()
  return nodeFromCommonmark(parser.parse(text))
}
