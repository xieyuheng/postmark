> We should use `CustomListItem` instead `CustomList`

- remove `CustomTaggedList`

- rename `taggedList` to `TaggedItem`

- remove `CustomList`

- inline `BulletList` & `BulletListItem` to `List` & `ListItem`

- `CustomListItem` -- the only way to custom list item is to use `TaggedItem`

# markdown list item extension

- `taggedListFromListItem` parse markdown list item to `tagged-list`

- `CustomTaggedListPlugin`
- `parser.customTaggedList`

- `plugins/tagged-list` -- tests -- using high level API `parser.customTaggedList`

- `plugins/tagged-list/content` -- has both `text` (without tags) and `fullText`

# plugins

- [docs] `plugins/` docs about using plugin interface to build markdown extension
- [error report] `plugins/` be able to custom error report in plugin interface

# refactor

- [refactor] `NodeMapper` as a special `NodeVisitor`

  - to avoid implement `default` in client code

- [refactor] `CustomBlockPlugin` -- maybe should pass the whole block as callback argument.

  - to be symmetric to `CustomListItemPlugin`
