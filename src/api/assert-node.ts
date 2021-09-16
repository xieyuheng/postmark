import { Node } from "../api"
import * as ut from "../ut"

export function assertNode(node: Node, json: any): void {
  if (!ut.equal(node.json(), json)) {
    throw new Error(
      [
        `The node's json is not equal to given json.`,
        `  node's json: ${JSON.stringify(node.json())}`,
        `  given  json: ${JSON.stringify(json)}`,
      ].join("\n")
    )
  }
}