- nodes/ordered-list

- ordered-list--tight.test.ts
- ordered-list--loose.test.ts

- nodes/html_block

- nodes/html_inline

- [maybe] If the interface are well separated, we can use `ContainerNode` `LeafNode` `InlineNode` as subclass of `Node`

  - reference: https://spec.commonmark.org/0.30/

- `Node` -- every node also contains its text -- render node to markdown itself

# sequence

- `Sequence` -- special interface for top level linear contents

- `Content`
