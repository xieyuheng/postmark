import { Inline } from "../../node"

export class Text extends Inline {
  kind = "Text"

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
