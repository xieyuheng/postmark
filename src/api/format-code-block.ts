export function formatCodeBlock(info: string, text: string): string {
  let s = ""
  s += "``` " + info + "\n"
  s += text
  s += "```" + "\n"
  return s
}
