import { Inline } from "../../node"

export class Code extends Inline {
  kind = "Code"

  text: string

  constructor(opts: { text: string }) {
    super()
    this.text = opts.text
  }

  json() {
    return {
      kind: this.kind,
      text: this.text,
    }
  }
}
