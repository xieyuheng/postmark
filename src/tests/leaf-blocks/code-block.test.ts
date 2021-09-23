import { parseDocument, assertDocument } from "../../api"
import { formatCodeBlock } from "../../api"

{
  const text = formatCodeBlock("sisuo", "console.log('Hello')")
  const document = parseDocument(text)

  assertDocument(document, [
    {
      kind: "CodeBlock",
      info: "sisuo",
      text: "console.log('Hello')\n",
    },
  ])
}
