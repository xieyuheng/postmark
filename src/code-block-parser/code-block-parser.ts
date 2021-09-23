import ty, { Schema } from "@xieyuheng/ty"

export abstract class CodeBlockParser<A> {
  abstract customKind: string
  abstract schema: Schema<A>
  abstract recognize(info: string): boolean
  abstract parse(text: string): A
}
