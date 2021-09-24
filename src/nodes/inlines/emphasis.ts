import { Inline, Node } from "../../node"

export class Emphasis extends Inline {
  kind = "Emphasis"

  children: Array<Node>

  constructor(opts: { children: Array<Node> }) {
    super()
    this.children = opts.children
  }

  shallowCopy(): Emphasis {
    return new Emphasis(this)
  }

  json() {
    return {
      kind: this.kind,
      children: this.children.map((child) => child.json()),
    }
  }
}
