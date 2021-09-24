import { Inline } from "../../node"

export class Code extends Inline {
  kind = "Code"

  text: string

  constructor(opts: { text: string }) {
    super()
    this.text = opts.text
  }

  shallowCopy(): Code {
    return new Code(this)
  }

  json() {
    return {
      kind: this.kind,
      text: this.text,
    }
  }
}
