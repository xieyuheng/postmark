import { LineBreak } from "./line-break"

export class HardLineBreak extends LineBreak {
  kind = "HardLineBreak"

  constructor() {
    super()
  }

  shallowCopy(): HardLineBreak {
    return new HardLineBreak()
  }

  json() {
    return {
      kind: this.kind,
    }
  }
}
