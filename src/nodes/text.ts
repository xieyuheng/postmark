import { Node } from "../node"
import { nodeFromCommonmark } from "../api"
import * as Commonmark from "../vendor/commonmark"

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
