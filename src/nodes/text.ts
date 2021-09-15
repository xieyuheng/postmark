import { Node } from "../node"

export class Text extends Node {
  kind = "Text"

  value: string

  constructor(opts: { value: string }) {
    super()
    this.value = opts.value
  }

  json() {
    return {
      kind: this.kind,
      value: this.value,
    }
  }
}
