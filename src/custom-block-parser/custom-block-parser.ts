export class CustomBlockParser<T> {
  customKind: string
  recognize: (info: string) => boolean
  parse: (text: string, ctx: { index: number }) => T

  constructor(opts: {
    customKind: string
    recognize: (info: string) => boolean
    parse: (text: string, ctx: { index: number }) => T
  }) {
    this.customKind = opts.customKind
    this.recognize = opts.recognize
    this.parse = opts.parse
  }
}
