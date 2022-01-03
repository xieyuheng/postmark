export interface CustomBlockPlugin<T = null> {
  customKind: string
  recognize: (info: string) => boolean
  parse?: (text: string, ctx: { index: number }) => T
}
