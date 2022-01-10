# Postmark

A framework for building markdown extensions.

## Install

```bash
npm i @xieyuheng/postmark
```

## Used By

- [Sisuo App](https://sisuo.app)
- [Readonly.Link](https://readonly.link)
- [Xie Yuheng Website](https://xieyuheng.com)

## Usage

### Command Line Interface

After installed the `@xieyuheng/postmark` package, you can run `postmark help` to see help messages.

## API Docs

### `Postmark.createParser(opts: ParserOptions)`

```typescript
import Postmark from "@xieyuheng/postmark"

const parser = Postmark.createParser({
  enableTable: true, // default
})
```

### `parser.parseDocument(text: string)`

```typescript
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

const document = parser.parseDocument(text)

console.log(document)
```

Output:

``` javascript output
Document {
  kind: 'Document',
  attributes: {
    title: 'The principle of type theory',
    date: 2021-08-27T00:00:00.000Z,
    author: 'Xie Yuheng'
  },
  span: Span {
    start: Position { line: 1, column: 1 },
    end: Position { line: 5, column: 51 }
  },
  children: [
    Headline { ... },
    Paragraph { ... },
    BlockQuote { ... }
  ]
}
```

### `parser.use(plugin)`

```typescript
const parser = Postmark.createParser()
  .use<null>({
    kind: "CustomBlock",
    customKind: "Katex",
    recognize: ({ name }) => name.toLowerCase() === "katex",
  })
  .use<Dialog>({
    kind: "CustomItem",
    customKind: "Dialog",
    recognize: (item) =>
      item.start.some((tag) => tag.name.toLowerCase() === "dialog"),
    build: (item, { previousCustomItems }) =>
      Dialog.build(item, { previousCustomItems }),
  })
```

### `node.format()` & `node.render()`

The `node.format` & `node.render` methods, help user to avoid handle `Node` recursively.

- `node.format()` -- format `node` back to markdown itself.
- `node.render()` -- render `node` to html.

## Development

```
npm install    // Install dependences
npm run build  // Compile `src/` to `lib/`
npm run watch  // Watch the compilation
npm run test   // Run test
```

## Contributions

> Be polite, do not bring negative emotion to others.

- [TODO.md](TODO.md)
- [STYLE-GUIDE.md](STYLE-GUIDE.md)
- [CODE-OF-CONDUCT.md](CODE-OF-CONDUCT.md)
- When contributing, add yourself to [AUTHORS](AUTHORS)

## License

- [GPLv3](LICENSE)
