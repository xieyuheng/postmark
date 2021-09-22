import * as ut from "./index"

export function assertEqual(x: any, y: any): void {
  if (!ut.equal(x, y)) {
    throw new Error(
      [
        "I fail to assertEqual, the following two values are not equal.",
        `  x: ${JSON.stringify(x)}`,
        `  y: ${JSON.stringify(y)}`,
      ].join("\n")
    )
  }
}
