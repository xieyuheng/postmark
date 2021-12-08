import { Node } from "../../node"
import * as Nodes from "../../nodes"
import { Content } from "./content"
import { Tag } from "./tag"

export interface TaggedItemOptions {
  content: Content
  start: Array<Tag>
  end: Array<Tag>
  children: Array<TaggedItem>
}

export class TaggedItem {
  content: Content
  start: Array<Tag>
  end: Array<Tag>
  children: Array<TaggedItem>

  constructor(opts: TaggedItemOptions) {
    this.content = opts.content
    this.start = opts.start
    this.end = opts.end
    this.children = opts.children
  }

  json(): any {
    const result: any = {}

    if (this.start.length > 0) {
      result.start = this.start.map((tag) => tag.json())
    }

    result.content = this.content.json()

    if (this.end.length > 0) {
      result.end = this.end.map((tag) => tag.json())
    }

    if (this.children.length > 0) {
      result.children = this.children.map((child) => child.json())
    }

    return result
  }

  static build(item: Nodes.Item): TaggedItem {
    const nodes = item.children

    const content = new Content(this.beforeList(nodes))
    const start = Tag.parseStart(content.fullText)
    const end = Tag.parseEnd(content.fullText)
    const children = this.filterList(nodes)
      .flatMap((list) => list.children)
      .map((item) => TaggedItem.build(item))

    return new TaggedItem({ content, start, end, children })
  }

  static beforeList(nodes: Array<Node>): Array<Node> {
    const results: Array<Node> = []
    for (const node of nodes) {
      if (node instanceof Nodes.List) {
        break
      } else {
        results.push(node)
      }
    }

    return results
  }

  static filterList(nodes: Array<Node>): Array<Nodes.List> {
    const lists: Array<Nodes.List> = []
    for (const node of nodes) {
      if (node instanceof Nodes.List) {
        lists.push(node)
      }
    }

    return lists
  }
}
