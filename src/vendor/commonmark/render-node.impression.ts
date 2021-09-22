import * as Commonmark from "../commonmark"

const examples = `\
Hello *world*

Hi **there**
`

const renderer = new Commonmark.HtmlRenderer()
const parser = new Commonmark.Parser()
const document = parser.parse(examples)
const result = renderer.render(document)

console.log(result)
