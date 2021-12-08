# markdown list extension

- `parseTaggedList` parse markdown list to `tagged-list`

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

# later

- `NodeMapper` as a special `NodeVisitor`

  - to avoid implement `default` in client code

# maybe

- `CustomBlockPlugin` -- maybe should pass the whole block as callback argument.

  - to be symmetric to `CustomListPlugin`
