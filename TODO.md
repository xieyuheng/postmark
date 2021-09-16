- nodes/image
- nodes/code

- nodes/heading

- nodes/block_quote

- nodes/html_inline

- nodes/item
- nodes/list

- nodes/html_block

- [maybe] If the interface are well separated, we can use `ContainerNode` `LeafNode` `InlineNode` as subclass of `Node`

  - reference: https://spec.commonmark.org/0.30/

- `Node` -- every node also contains its text -- render node to markdown itself

# sequence

- `Sequence` -- special interface for top level linear contents

- `Content`
