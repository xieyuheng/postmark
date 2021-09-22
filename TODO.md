- rename html-inline to html-tag
- rename line-break to hard-line-break
- rename soft-break to soft-line-break

- use `ContainerNode` `LeafNode` `InlineNode` as subclass of `Node`

  - https://spec.commonmark.org/current

  - ContainerBlockNode < BlockNode < Node

    - block-quote
    - list > bullet-list, ordered-list
    - list-item > bullet-list-item, ordered-list-item

  - LeafBlockNode < BlockNode < Node

    - thematic-break
    - headline
    - code-block
    - html-block

  - InlineNode < Node

    - code
    - emphasis
    - strong
    - link
    - hard-line-break < line-break
    - soft-line-break < line-break
    - text

- support well typed metadata in `Document<T>` -- `T` with a default

- `Node` -- every node also contains its text -- render node to markdown itself

# sequence

- `Sequence` -- special interface for top level linear contents

- `Content`
