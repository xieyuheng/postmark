import { postprocess } from "../api"
import { tester } from "../api"
import { formatCodeBlock } from "../api"
import * as Nodes from "../nodes"

class Trivial {
  text: string

  constructor(text: string) {
    this.text = text
  }
}

class TrivialParser extends Nodes.CodeBlockParser<Trivial> {
  customKind = "Trivial"

  recognize(info: string): boolean {
    return info.startsWith("trivial")
  }

  parse(text: string): Trivial {
    return new Trivial(text)
  }
}

const text = `\
# Non Trivial

${formatCodeBlock("non-trivial", "Hello! I am Non Trivial.")}

# Trivial

${formatCodeBlock("trivial", "Hello! I am Trivial.")}
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
