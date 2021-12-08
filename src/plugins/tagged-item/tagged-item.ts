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

  static build(item: Nodes.Item): TaggedItem {
    throw new Error("TODO")
  }
}
