import { LineBreak } from "./line-break"

export class SoftLineBreak extends LineBreak {
  kind = "SoftLineBreak"

  constructor() {
    super()
  }

  shallowCopy(): SoftLineBreak {
    return new SoftLineBreak()
  }

  json() {
    return {
      kind: this.kind,
    }
  }
}
