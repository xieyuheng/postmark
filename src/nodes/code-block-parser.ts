export abstract class CodeBlockParser<T> {
  abstract customKind: string
  abstract recognize(info: string): boolean
  abstract parse(text: string): T
}
