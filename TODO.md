# markdown list item extension

- `CustomItem` -- the only way to custom `Item` is to use `TaggedItem`

  - `CustomItem` compose of `TaggedItem` -- instead of `TaggedItem` inherit `Item` directly

- `CustomTaggedItemPlugin` new plugin
- `ApplyCustomTaggedItemPlugins` new visitor

- parse markdown `ListItem` to `TaggedItem`


- `parser.customTaggedItem`

- `plugins/tagged-item` -- tests -- using high level API `parser.customTaggedItem`

- `plugins/tagged-item/content` -- has both `text` (without tags) and `fullText`

# plugins

- [docs] `plugins/` docs about using plugin interface to build markdown extension
- [error report] `plugins/` be able to custom error report in plugin interface

# refactor

- [refactor] `NodeMapper` as a special `NodeVisitor`

  - to avoid implement `default` in client code

- [refactor] `CustomBlockPlugin` -- maybe should pass the whole block as callback argument.

  - to be symmetric to `CustomListItemPlugin`
