- nodes/leaf-blocks/
- nodes/inlines/

- tests/container-blocks/
- tests/leaf-blocks/
- tests/inlines/

- use `ContainerBlock` `LeafBlock` `Inline` as subclass of `Node`

  - https://spec.commonmark.org/current

  - ContainerBlock < Block < Node

    - block-quote
    - list > bullet-list, ordered-list
    - list-item > bullet-list-item, ordered-list-item

  - LeafBlock < Block < Node

    - thematic-break
    - headline
    - code-block
    - html-block

  - Inline < Node

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
