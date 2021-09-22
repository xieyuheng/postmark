import Marked from "marked"

const md = `
| a | b |
|---|---|
| 1 | 2 |
| 3 | 4 |
`

const tokens = Marked.lexer(md)
console.dir(tokens, { depth: null })
