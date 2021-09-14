import { Node, parseNode } from "../node"

{
  const text = `\
Hello world

Hi there
`
  const node = parseNode(text)
  console.log(node)
}
