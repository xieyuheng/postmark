import frontMatter from "front-matter"
import { Node } from "../node"
import * as NodeVisitors from "../node/node-visitors"
import * as Nodes from "../nodes"
import * as Plugins from "../plugins"
import * as Commonmark from "../vendor/commonmark"
import { documentFromCommonmark } from "./document-from-commonmark"
import { nodeFromCommonmark } from "./node-from-commonmark"

export interface ParserOptions {
  customBlockPlugins?: Array<Plugins.CustomBlockPlugin<unknown>>
  customItemPlugins?: Array<Plugins.CustomItemPlugin<unknown>>
  enableTable?: boolean
}

export class Parser {
  customBlockPlugins: Array<Plugins.CustomBlockPlugin<unknown>>
  customItemPlugins: Array<Plugins.CustomItemPlugin<unknown>>
  enableTable: boolean

  constructor(opts?: ParserOptions) {
    this.customBlockPlugins = opts?.customBlockPlugins || []
    this.customItemPlugins = opts?.customItemPlugins || []
    this.enableTable = opts?.enableTable ?? true
  }

  customBlock<T>(customBlockPlugin: Plugins.CustomBlockPlugin<T>): this {
    this.customBlockPlugins.push(customBlockPlugin)
    return this
  }

  customList<T>(customListPlugin: Plugins.CustomItemPlugin<T>): this {
    this.customItemPlugins.push(customListPlugin)
    return this
  }

  static create(opts?: ParserOptions): Parser {
    return new Parser(opts)
  }

  private postprocess(node: Node): Node {
    if (this.customBlockPlugins.length > 0) {
      node = node.accept(
        new NodeVisitors.ApplyCustomBlockPlugins({
          parser: this,
          customBlockPlugins: this.customBlockPlugins,
        })
      )
    }

    if (this.customBlockPlugins.length > 0) {
      node = node.accept(
        new NodeVisitors.ApplyCustomItemPlugins({
          parser: this,
          customItemPlugins: this.customItemPlugins,
        })
      )
    }

    if (this.enableTable) {
      node = node.accept(
        new NodeVisitors.CreateTableFromParagraph({
          parser: this,
        })
      )
    }

    return node
  }

  parseNodes(text: string): Array<Node> {
    const commonmarkParser = new Commonmark.Parser()
    return Commonmark.children(commonmarkParser.parse(text))
      .map((child) => nodeFromCommonmark(child))
      .map((node) => this.postprocess(node))
  }

  parseDocument(text: string): Nodes.Document {
    const { attributes, body } = frontMatter(text)
    const commonmarkParser = new Commonmark.Parser()
    const node = documentFromCommonmark(commonmarkParser.parse(body), {
      attributes,
    })
    return this.postprocess(node) as any
  }
}
