import app from "../app"
import * as Nodes from "../nodes"

class Trivial {
  text: string

  constructor(text: string) {
    this.text = text
  }
}

{
  const text = `\
# Non Trivial

~~~ non-trivial
Hello! I am Non Trivial.
~~~

# Trivial

~~~ trivial
Hello! I am Trivial.
~~~
`

  const document = app.tester.parser.parseDocument(text)

  app.tester.assertDocument(document, [
    {
      kind: "Headline",
      level: 1,
      children: [{ kind: "Text", text: "Non Trivial" }],
    },
    {
      kind: "CodeBlock",
      info: "non-trivial",
      text: "Hello! I am Non Trivial.\n",
    },
    {
      kind: "Headline",
      level: 1,
      children: [{ kind: "Text", text: "Trivial" }],
    },
    {
      kind: "CodeBlock",
      info: "trivial",
      text: "Hello! I am Trivial.\n",
    },
  ])

  const processed = document.postprocess({
    codeBlockParsers: [
      app.createCodeBlockParser({
        customKind: "Trivial",
        recognize: (info) => info.startsWith("trivial"),
        parse: (text) => new Trivial(text),
      }),
    ],
  })

  app.tester.assertDocument(processed, [
    {
      kind: "Headline",
      level: 1,
      children: [{ kind: "Text", text: "Non Trivial" }],
    },
    {
      kind: "CodeBlock",
      info: "non-trivial",
      text: "Hello! I am Non Trivial.\n",
    },
    {
      kind: "Headline",
      level: 1,
      children: [{ kind: "Text", text: "Trivial" }],
    },
    {
      kind: "CustomBlock",
      customKind: "Trivial",
      info: "trivial",
      text: "Hello! I am Trivial.\n",
      value: new Trivial("Hello! I am Trivial.\n"),
    },
  ])
}

{
  const text = `\
- ~~~ trivial
  a
  ~~~

- ~~~ trivial
  b
  ~~~

- ~~~ trivial
  c
  ~~~
`

  const document = app.tester.parser.parseDocument(text)

  app.tester.assertDocument(document, [
    {
      kind: "BulletList",
      tight: false,
      children: [
        {
          kind: "BulletListItem",
          children: [
            {
              kind: "CodeBlock",
              info: "trivial",
              text: "a\n",
            },
          ],
        },
        {
          kind: "BulletListItem",
          children: [
            {
              kind: "CodeBlock",
              info: "trivial",
              text: "b\n",
            },
          ],
        },
        {
          kind: "BulletListItem",
          children: [
            {
              kind: "CodeBlock",
              info: "trivial",
              text: "c\n",
            },
          ],
        },
      ],
    },
  ])

  const processed = document.postprocess({
    codeBlockParsers: [
      app.createCodeBlockParser({
        customKind: "Trivial",
        recognize: (info) => info.startsWith("trivial"),
        parse: (text) => new Trivial(text),
      }),
    ],
  })

  app.tester.assertDocument(processed, [
    {
      kind: "BulletList",
      tight: false,
      children: [
        {
          kind: "BulletListItem",
          children: [
            {
              kind: "CustomBlock",
              customKind: "Trivial",
              info: "trivial",
              text: "a\n",
              value: new Trivial("a\n"),
            },
          ],
        },
        {
          kind: "BulletListItem",
          children: [
            {
              kind: "CustomBlock",
              customKind: "Trivial",
              info: "trivial",
              text: "b\n",
              value: new Trivial("b\n"),
            },
          ],
        },
        {
          kind: "BulletListItem",
          children: [
            {
              kind: "CustomBlock",
              customKind: "Trivial",
              info: "trivial",
              text: "c\n",
              value: new Trivial("c\n"),
            },
          ],
        },
      ],
    },
  ])
}
