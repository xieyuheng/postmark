import { Node, parseNode } from "../node"

{
  const sisuo = renderCodeBlock(
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

  const text = `\
Hello *world*

Hi **there**

---

${sisuo}

---
`

  const node = parseNode(text)
  console.dir(node, { depth: null })
}

function renderCodeBlock(info: string, text: string): string {
  let s = ""
  s += "``` " + info + "\n"
  s += text
  s += "```" + "\n"
  return s
}
