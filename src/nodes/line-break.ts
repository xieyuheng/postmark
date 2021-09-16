import { Node } from "../node"

export class LineBreak extends Node {
  kind = "LineBreak"

  constructor() {
    super()
  }

  json() {
    return {
      kind: this.kind,
    }
  }
}
