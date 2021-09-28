import * as Commonmark from "../commonmark"

const examples = `\
Hello *world*

Hi **there**
`

const parser = new Commonmark.Parser()
const document = parser.parse(examples)

const renderer = new Commonmark.HtmlRenderer()
const html = renderer.render(document)

console.log(html)
