import app from "../../app"
import * as ut from "../../ut"

{
  // NOTE The info line will be trimed
  const text = ut.formatCodeBlock("    sisuo    ", "console.log('Hello')")
  const document = app.createParser().parseDocument(text)

  document.assertChildrenJson([
    {
      kind: "CodeBlock",
      info: "sisuo",
      text: "console.log('Hello')\n",
    },
  ])
}
