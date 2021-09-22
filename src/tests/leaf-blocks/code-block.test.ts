import { parseDocument, assertDocument } from "../../api"
import { formatCodeBlock } from "../../api"

{
  const codeBlock = formatCodeBlock("sisuo", "console.log('Hello')")
  const node = parseDocument(codeBlock)

  assertDocument(node, [
    {
      kind: "CodeBlock",
      info: "sisuo",
      value: "console.log('Hello')\n",
    },
  ])
}
