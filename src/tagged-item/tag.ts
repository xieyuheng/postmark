import rr from "@xieyuheng/readable-regular-expression"

export class Tag {
  name: string

  constructor(name: string) {
    this.name = name
  }

  json() {
    return this.name
  }

  static startPattern = rr.seq(
    rr.beginning,
    "[",
    rr.group(rr.non_greedy(rr.zero_or_more(/./))),
    "]"
  )

  static endPattern = rr.seq(
    "[",
    rr.group(rr.non_greedy(rr.zero_or_more(/./))),
    "]",
    rr.end
  )

  static parseStart(text: string): Array<Tag> {
    const matchArray = text.trim().match(this.startPattern)
    return matchArray ? this.tagsFromMatchArray(matchArray) : []
  }

  static parseEnd(text: string): Array<Tag> {
    const matchArray = text.trim().match(this.endPattern)
    return matchArray ? this.tagsFromMatchArray(matchArray) : []
  }

  static tagsFromMatchArray(matchArray: RegExpMatchArray): Array<Tag> {
    const found = matchArray[1]
    if (found === undefined) return []
    return found.split(",").map((part) => new Tag(part.trim()))
  }

  static trimStart(text: string): string {
    return text.replace(this.startPattern, "").trimStart()
  }

  static trimEnd(text: string): string {
    return text.replace(this.endPattern, "").trimEnd()
  }

  static trim(text: string): string {
    return this.trimEnd(this.trimStart(text))
  }
}
