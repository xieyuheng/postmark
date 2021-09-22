import { Node } from "../../node"
import { nodeFromCommonmark } from "../../api"
import * as Commonmark from "../../vendor/commonmark"
import ty from "@xieyuheng/ty"

export class Code extends Node {
  kind = "Code"

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

  static fromCommonmark(node: Commonmark.Node): undefined | Code {
    if (node.type === "code") {
      return new Code({
        value: ty.string().validate(node.literal),
      })
    }
  }
}
