import { tester } from "../api"
import * as Nodes from "../nodes"
import * as ut from "../ut"
import ty from "@xieyuheng/ty"

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

  const document: Nodes.Document<{
    title: string
    authors: Array<string>
    date: Date
  }> = tester.parser.parseDocumentWithFrontMatter(text, {
    attributes: ty.object({
      title: ty.string(),
      authors: ty.array(ty.string()),
      date: ty.guard((x: any): x is Date => x instanceof Date),
    }),
  })

  ut.assertEqual(document.attributes, {
    title: "Hello world",
    authors: ["xieyuheng", "yuhengxie", "hengxieyu"],
    date: new Date("2021-09-22"),
  })

  tester.assertDocument(document, [
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
