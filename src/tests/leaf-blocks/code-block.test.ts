import { tester } from "../../api"
import { formatCodeBlock } from "../../api"

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
