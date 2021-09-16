import * as Commonmark from "../commonmark"
import { formatCodeBlock } from "../../api"

const examples = `\
Hello *world*

Hi **there**

---

- a
- b
- c

${formatCodeBlock("js", "console.log('Hello')")}

[example link](https://example.com "example title")

![image link](https://example.com "example title")

${"`console.log('Hello')`"}
`

const parser = new Commonmark.Parser()
const document = parser.parse(examples)

console.dir(Commonmark.presentNode(document), { depth: null })
