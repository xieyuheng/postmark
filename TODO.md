- move `leaf-block` from `node/` to `nodes/`
- move `container-block` from `node/` to `nodes/`
- move `block` from `node/` to `nodes/`

- `NodeVisitor.onCustomList`

- `CustomList` has underlying `list`

  - remind to use setter for `children`

- `CustomListPlugin` should be a class instead of interface -- to use template pattern
- `CustomBlockPlugin` should be a class instead of interface -- to use template pattern

# custom list

- `NodeVisitors.HandleCustomList`
- `Parser.customList` fluent API

# docs

- update readme about using custom-block-plugin

# errors

- `CustomBlockPlugin` be able to report error
- `CustomListPlugin` be able to report error
