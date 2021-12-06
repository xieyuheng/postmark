export interface CustomBlockParser<T> {
  customKind: string
  recognize: (info: string) => boolean
  parse: (text: string, ctx: { index: number }) => T
}
