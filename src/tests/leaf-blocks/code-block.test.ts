import { tester } from "../../api"
import * as ut from "../../ut"

{
  const text = ut.formatCodeBlock("sisuo", "console.log('Hello')")
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "CodeBlock",
      info: "sisuo",
      text: "console.log('Hello')\n",
    },
  ])
}
