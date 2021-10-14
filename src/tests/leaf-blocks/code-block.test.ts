import { tester } from "../../api"
import { formatCodeBlock } from "../../ut"

{
  const text = formatCodeBlock("sisuo", "console.log('Hello')")
  const document = tester.parser.parseDocument(text)

  tester.assertDocument(document, [
    {
      kind: "CodeBlock",
      info: "sisuo",
      text: "console.log('Hello')\n",
    },
  ])
}
