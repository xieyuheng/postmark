import ty, { Schema } from "@xieyuheng/ty"

export abstract class CodeBlockParser<T> {
  abstract customKind: string
  abstract schema: Schema<T>
  abstract recognize(info: string): boolean
  abstract parse(text: string): T
}
