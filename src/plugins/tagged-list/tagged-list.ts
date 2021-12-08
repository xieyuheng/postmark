import { Content } from "./content"
import { Tag } from "./tag"

export interface TaggedListOptions {
  content: Content
  start: Array<Tag>
  end: Array<Tag>
  children: Array<TaggedList>
}

export class TaggedList {
  content: Content
  start: Array<Tag>
  end: Array<Tag>
  children: Array<TaggedList>

  constructor(opts: TaggedListOptions) {
    this.content = opts.content
    this.start = opts.start
    this.end = opts.end
    this.children = opts.children
  }
}
