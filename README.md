# Postmark

Markdown-based content engineeing.

## Install

``` bash
npm i @xieyuheng/postmark
```

## Usage

### Command line

```
postmark render <file>  Render a markdown file to html
postmark format <file>  Format a markdown file
```

### Parse markdown to `Node`

``` typescript
import { Parser } from "@forchange/postmark"

const text = `\
---
title: The principle of type theory
date: 2021-08-27
author: Xie Yuheng
---

# The principle

The principle of type theory is:

> We should study **terms** and **types** together.
`

const parser = new Parser()
const document = parser.parseDocument(text)

console.log(document)

// Document {
//   kind: 'Document',
//   attributes: {
//     title: 'The principle of type theory',
//     date: 2021-08-27T00:00:00.000Z,
//     author: 'Xie Yuheng'
//   },
//   span: Span {
//     start: Position { line: 1, column: 1 },
//     end: Position { line: 5, column: 51 }
//   },
//   children: [
//     Headline { ... },
//     Paragraph { ... },
//     BlockQuote { ... }
//   ]
// }
```

### Custom `CustomBlockParser`

TODO

## API Docs

### `Node.format` & `Node.render`

The `Node.format` & `Node.render` methods, help user to avoid handle `Node` recursively.

- `Node.format()` -- format node back to markdown itself.
- `Node.render()` -- render node to html.

## Contributions

> Be polite, do not bring negative emotion to others.

- [TODO.md](TODO.md)
- [STYLE-GUIDE.md](STYLE-GUIDE.md)
