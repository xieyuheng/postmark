import { Node } from "../node"

export class SoftBreak extends Node {
  kind = "SoftBreak"

  constructor() {
    super()
  }

  json() {
    return {
      kind: this.kind,
    }
  }
}
