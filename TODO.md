- no `Nodes.Document.postprocess` -- use `ParserOptions`

- rename `ParserOptions.attributes` to `ParserOptions.attributeSchema`

- `Parser.parseNode`

- `NodeVisitor` take `parser`

- `TablePostprocessor` -- create `Nodes.Table` -- only `children` is needed, we compute other fields

- `Nodes.Table` -- `header`
- `Nodes.Table` -- `rows`

- `Nodes.Table` -- `render`

# later

- update readme about using custom-block-parser
  - after `sisuo` use this library

- `CustomBlockParser` be able to report error
