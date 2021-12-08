import app from "../app"
import * as Nodes from "../nodes"
import * as ut from "../ut"

{
  const text = `\
---
title: Hello world
authors: [xieyuheng, yuhengxie, hengxieyu]
date: 2021-09-22
---

# Hiya

Hi Hi Yo Yo
`

  const document: Nodes.Document = app.createParser().parseDocument(text)

  ut.assertEqual(document.attributes, {
    title: "Hello world",
    authors: ["xieyuheng", "yuhengxie", "hengxieyu"],
    date: new Date("2021-09-22"),
  })

  document.assertChildrenJson([
    {
      kind: "Headline",
      level: 1,
      children: [{ kind: "Text", text: "Hiya" }],
    },
    {
      kind: "Paragraph",
      children: [{ kind: "Text", text: "Hi Hi Yo Yo" }],
    },
  ])
}
