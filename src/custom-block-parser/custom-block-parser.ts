export class CustomBlockParser<T> {
  customKind: string
  recognize: (info: string) => boolean
  parse: (text: string, ctx: { index: number; info: string }) => T

  constructor(opts: {
    customKind: string
    recognize: (info: string) => boolean
    parse: (text: string, ctx: { index: number; info: string }) => T
  }) {
    this.customKind = opts.customKind
    this.recognize = opts.recognize
    this.parse = opts.parse
  }

  static create<T>(opts: {
    customKind: string
    recognize: (info: string) => boolean
    parse: (text: string, ctx: { index: number; info: string }) => T
  }): CustomBlockParser<T> {
    return new CustomBlockParser(opts)
  }
}
