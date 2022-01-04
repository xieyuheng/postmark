import app from "../app"

class Trivial {
  text: string

  constructor(text: string) {
    this.text = text
  }
}

const parser = app.createParser().customBlock({
  kind: "CustomBlock",
  customKind: "Trivial",
  recognize: ({ name }) => name === "trivial",
  parse: (text) => new Trivial(text),
})

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

  const document = parser.parseDocument(text)

  document.assertChildrenJson([
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
  // NOTE `CodeBlock` nested in list

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

  const document = parser.parseDocument(text)

  document.assertChildrenJson([
    {
      kind: "List",
      tight: false,
      children: [
        {
          kind: "Item",
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
          kind: "Item",
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
          kind: "Item",
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
