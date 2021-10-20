import postmark from "../index"

const text = `\
---
title: The principle of type theory
date: 2021-08-27
author: Xie Yuheng
---

# The principle

The principle of type theory is:

> We should study **terms** and **types** together.
`

const document = postmark.defaultParser.parseDocument(text)

console.log(document)
