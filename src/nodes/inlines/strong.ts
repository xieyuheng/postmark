import { Inline, Node } from "../../node"

export class Strong extends Inline {
  kind = "Strong"

  children: Array<Node>

  constructor(opts: { children: Array<Node> }) {
    super()
    this.children = opts.children
  }

  shallowCopy(): Strong {
    return new Strong(this)
  }

  json() {
    return {
      kind: this.kind,
      children: this.children.map((child) => child.json()),
    }
  }
}
