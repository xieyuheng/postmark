export interface CustomBlockPlugin<T = null> {
  kind: "CustomBlock"
  customKind: string
  recognize: (opts: {
    info: string
    name: string
    extraInfo: string
  }) => boolean
  parse?: (text: string, ctx: { index: number }) => T
}
