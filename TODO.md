# markdown list extension

- `plugins/tagged-list/content`
- `plugins/tagged-list/tag`
- `plugins/tagged-list/root-tagged-list` -- the only node that knows about its `siblings`

- `TaggedList` parser

- utilities about parsing markdown lists to target data type.

  example target data types:

  - `MindMap`
  - `QA`

- `CustomTaggedList`

# docs

- docs about using `CustomBlockPlugin`
- docs about using `CustomListPlugin`

# errors

- `CustomBlockPlugin` be able to report error
- `CustomListPlugin` be able to report error

# maybe

- [maybe] to use template pattern

  - `CustomListPlugin` should be a class instead of interface
  - `CustomBlockPlugin` should be a class instead of interface
