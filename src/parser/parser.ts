import frontMatter from "front-matter"
import { Node } from "../node"
import * as NodeVisitors from "../node-visitors"
import * as Nodes from "../nodes"
import { Plugin } from "../plugins"
import * as Commonmark from "../vendor/commonmark"
import { documentFromCommonmark } from "./document-from-commonmark"
import { nodeFromCommonmark } from "./node-from-commonmark"

export interface ParserOptions {
  plugins?: Array<Plugin<any>>
  enableTable?: boolean
}

export class Parser {
  plugins: Array<Plugin<any>>
  enableTable: boolean

  constructor(opts?: ParserOptions) {
    this.plugins = opts?.plugins || []
    this.enableTable = opts?.enableTable ?? true
  }

  use<T>(plugin: Plugin<T>): this {
    this.plugins.push(plugin)
    return this
  }

  static create(opts?: ParserOptions): Parser {
    return new Parser(opts)
  }

  postprocess(node: Node): Node {
    node = node.accept(new NodeVisitors.ApplyBlockPlugins(this))
    node = node.accept(new NodeVisitors.ApplyItemPlugins(this))
    if (this.enableTable) {
      node = node.accept(new NodeVisitors.CreateTableFromParagraph(this))
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
