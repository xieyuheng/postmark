- rename emphasize to emphasis

- use `ContainerNode` `LeafNode` `InlineNode` as subclass of `Node`

  - ContainerBlockNode < BlockNode < Node

    - Block quotes
    - List items
    - Lists

  - LeafBlockNode < BlockNode < Node

    - Thematic breaks
    - headline
    - code block
    - HTML blocks

  - InlineNode < Node

    - code
    - Emphasis
    - strong
    - link


- support well typed metadata in `Document<T>` -- `T` with a default

- `Node` -- every node also contains its text -- render node to markdown itself

# sequence

- `Sequence` -- special interface for top level linear contents

- `Content`
