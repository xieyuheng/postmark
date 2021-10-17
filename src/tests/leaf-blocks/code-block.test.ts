import app from "../../app"
import * as ut from "../../ut"

{
  // NOTE The info line will be trimed
  const text = ut.formatCodeBlock("    sisuo    ", "console.log('Hello')")
  const document = app.tester.parser.parseDocument(text)

  app.tester.assertDocument(document, [
    {
      kind: "CodeBlock",
      info: "sisuo",
      text: "console.log('Hello')\n",
    },
  ])
}
