export function isObject(x: any): boolean {
  return typeof x === "object" && x !== null && !(x instanceof Array)
}
