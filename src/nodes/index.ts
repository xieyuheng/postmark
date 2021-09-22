export * from "./document"

// NOTE https://spec.commonmark.org/current

// NOTE The class hierarchy:
// - ContainerBlock < Block < Node
//   - block-quote
//   - list > bullet-list, ordered-list
//   - list-item > bullet-list-item, ordered-list-item
// - LeafBlock < Block < Node
//   - paragraph
//   - thematic-break
//   - headline
//   - code-block
//   - html-block
// - Inline < Node
//   - code
//   - emphasis
//   - strong
//   - link
//   - line-break > hard-line-break, soft-line-break
//   - text

export * from "./container-blocks/block-quote"
export * from "./container-blocks/bullet-list"
export * from "./container-blocks/bullet-list-item"
export * from "./container-blocks/ordered-list"
export * from "./container-blocks/ordered-list-item"

export * from "./leaf-blocks/paragraph"
export * from "./leaf-blocks/headline"
export * from "./leaf-blocks/thematic-break"
export * from "./leaf-blocks/html-block"
export * from "./leaf-blocks/code-block"

export * from "./emphasis"
export * from "./strong"
export * from "./hard-line-break"
export * from "./soft-line-break"
export * from "./link"
export * from "./image"
export * from "./code"
export * from "./html-tag"
export * from "./text"
