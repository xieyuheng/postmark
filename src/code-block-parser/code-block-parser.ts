export class CodeBlockParser<T> {
  customKind: string
  recognize: (info: string) => boolean
  parse: (text: string) => T

  constructor(
    customKind: string,
    opts: {
      recognize: (info: string) => boolean
      parse: (text: string) => T
    }
  ) {
    this.customKind = customKind
    this.recognize = opts.recognize
    this.parse = opts.parse
  }
}
