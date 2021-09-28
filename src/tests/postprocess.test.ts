import { postprocess } from "../api"
import { tester } from "../api"
import * as Nodes from "../nodes"
import { CodeBlockParser } from "../code-block-parser"

class Trivial {
  text: string

  constructor(text: string) {
    this.text = text
  }
}

class TrivialParser extends CodeBlockParser<Trivial> {
  customKind = "Trivial"

  recognize(info: string): boolean {
    return info.startsWith("trivial")
  }

  parse(text: string): Trivial {
    return new Trivial(text)
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

  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
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

  const processed = postprocess(document, {
    codeBlockParsers: [new TrivialParser()],
  })

  tester.assertDocument(processed, [
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

  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
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

  const processed = postprocess(document, {
    codeBlockParsers: [new TrivialParser()],
  })

  tester.assertDocument(processed, [
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
