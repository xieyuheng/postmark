# markdown list item extension

- `TaggedItem.build` -- handle `start` and `end`

- `tests/custom-item` -- recognize by `start`

- `plugins/tagged-item/content` -- has both `text` (without tags) and `fullText`

# plugins

- [docs] `plugins/` docs about using plugin interface to build markdown extension
- [error report] `plugins/` be able to custom error report in plugin interface

# refactor

- [refactor] `NodeMapper` as a special `NodeVisitor`

  - to avoid implement `default` in client code
