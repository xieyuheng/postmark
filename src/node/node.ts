import { NodeVisitor } from "../node"
import * as Commonmark from "../vendor/commonmark"

export abstract class Node {
  abstract kind: string
  abstract json(): any
  abstract shallowCopy(): Node
  abstract format(): string

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.default(this)
  }

  render(): string {
    const text = this.format()

    const parser = new Commonmark.Parser()
    const document = parser.parse(text)

    const renderer = new Commonmark.HtmlRenderer()
    const html = renderer.render(document)

    return html
  }
}
