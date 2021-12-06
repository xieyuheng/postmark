import * as ut from "../../ut"
import * as Commonmark from "../commonmark"

const examples = `\
Hello *world*

Hi **there**

---

${ut.formatCodeBlock("js", "console.log('Hello')")}

[example link](https://example.com "example title")

![image link](https://example.com "example title")

${"`console.log('Hello')`"}

# headline 1
## headline 2
### headline 3

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

5. a
1. b
1. c

<x-card />

<x-card>
  Hello world!
</x-card>

${
  "`" +
  `${`\
| Header  | Another Header |
|---------|----------------|
| field 1 | value one      |
`}` +
  "`"
}
`

const parser = new Commonmark.Parser()
const document = parser.parse(examples)

console.dir(Commonmark.presentNode(document), { depth: null })
