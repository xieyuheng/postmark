# markdown list item extension

- `parser.customItem` -- the high level API

- `ApplyCustomItemPlugins` new visitor

- parse markdown `ListItem` to `TaggedItem`


- `plugins/tagged-item` -- tests -- using high level API `parser.customItem`
- `plugins/tagged-item/content` -- has both `text` (without tags) and `fullText`

# plugins

- [docs] `plugins/` docs about using plugin interface to build markdown extension
- [error report] `plugins/` be able to custom error report in plugin interface

# refactor

- [refactor] `NodeMapper` as a special `NodeVisitor`

  - to avoid implement `default` in client code
