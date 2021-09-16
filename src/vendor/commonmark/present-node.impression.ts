import * as Commonmark from "../commonmark"
import { formatCodeBlock } from "../../api"

const parser = new Commonmark.Parser()

const sisuo = formatCodeBlock(
  "sisuo",
  `\
环节:
  标题: 简单的测试
  标签:
  - 测试标签1
  - 测试标签2
  - 测试标签3
  卡组:
  - cards-1
`
)

const parsed = parser.parse(`\
Hello *world*

Hi **there**

---

- a
- b
- c

${sisuo}

[example link](https://example.com "example title")

![image link](https://example.com "example title")
`)

console.dir(Commonmark.presentNode(parsed), { depth: null })

// for (const node of nodeChildren(parsed)) {
//   console.log(presentNode(node))
// }

// const writer = new Commonmark.HtmlRenderer()
// const result = writer.render(parsed)
// console.log(result)
