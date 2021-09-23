import { Node } from "../api"
import { CodeBlockParser } from "../code-block-parser"
import * as Nodes from "../nodes"

export function postprocess(
  node: Node,
  opts: {
    codeBlockParsers: Array<CodeBlockParser<unknown>>
  }
): Node {
  const { codeBlockParsers } = opts
  // TODO
  return node
}
