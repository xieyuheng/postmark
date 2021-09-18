import * as Commonmark from "../commonmark"
import { formatCodeBlock } from "../../api"

const examples = `\
Hello *world*

Hi **there**

---

${formatCodeBlock("js", "console.log('Hello')")}

[example link](https://example.com "example title")

![image link](https://example.com "example title")

${"`console.log('Hello')`"}

# heading 1
## heading 2
### heading 3

> Make the change easy, then make the easy change.
>
> -- Kent Beck

A tight list:
- a
- b
- c

A loose list:
- a
  a
  a

- b

- c

- d

A tight ordered list:

1. a
1. b
1. c
`

const parser = new Commonmark.Parser()
const document = parser.parse(examples)

console.dir(Commonmark.presentNode(document), { depth: null })
