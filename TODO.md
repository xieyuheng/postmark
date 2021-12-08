# markdown list extension

- `CustomTaggedList.taggedList` -- parser markdown list to `tagged-list`

- `CustomTaggedListPlugin`
- `parser.customTaggedList`

- `plugins/tagged-list` -- tests -- using high level API `parser.customTaggedList`

- `plugins/tagged-list/content` -- has both `text` (without tags) and `fullText`

# docs

- docs about using plugin interface to build markdown extension

  - `CustomBlockPlugin`
  - `CustomListPlugin`
  - `CustomTaggedListPlugin`

# errors

- be able to custom error report in plugin interface

  - `CustomBlockPlugin`
  - `CustomListPlugin`
  - `CustomTaggedListPlugin`

# maybe

- `CustomBlockPlugin` -- maybe should pass the whole block as callback argument.

  - to be symmetric to `CustomListPlugin`
