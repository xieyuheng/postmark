import { Inline } from "../../node"

export class HtmlTag extends Inline {
  kind = "HtmlTag"

  text: string

  constructor(opts: { text: string }) {
    super()
    this.text = opts.text
  }

  shallowCopy(): HtmlTag {
    return new HtmlTag(this)
  }

  json() {
    return {
      kind: this.kind,
      text: this.text,
    }
  }
}
