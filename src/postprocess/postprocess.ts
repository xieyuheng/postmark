import { Node, ContainerBlock } from "../node"
import { NodeVisitor } from "../node"
import * as Nodes from "../nodes"
import { CustomBlockParser } from "../custom-block-parser"
import * as Postprocessors from "../postprocessors"

export function postprocess(
  document: Nodes.Document,
  opts: {
    customBlockParsers: Array<CustomBlockParser<unknown>>
  }
): Nodes.Document {
  document = document.accept(
    new Postprocessors.CustomBlockPostprocessor({
      customBlockParsers: opts.customBlockParsers,
    })
  ) as Nodes.Document

  return document
}
