import { LineBreak } from "./line-break"

export class SoftLineBreak extends LineBreak {
  kind = "SoftLineBreak"

  constructor() {
    super()
  }

  json() {
    return {
      kind: this.kind,
    }
  }
}
