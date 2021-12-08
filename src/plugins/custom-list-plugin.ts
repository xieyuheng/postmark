// TODO CustomTaggedItemPlugin

export interface CustomListPlugin<T> {
  customKind: string
  // recognize: (list: Nodes.List) => boolean
  // parse: (list: Nodes.List) => T
}
