import { LineBreak } from "./line-break"

export class HardLineBreak extends LineBreak {
  kind = "HardLineBreak"

  constructor() {
    super()
  }

  json() {
    return {
      kind: this.kind,
    }
  }
}
