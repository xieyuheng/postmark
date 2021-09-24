import { Position } from "./position"

export class Span {
  start: Position
  end: Position

  constructor(start: Position, end: Position) {
    this.start = start
    this.end = end
  }

  static fromPairs(sourcepos: [[number, number], [number, number]]): Span {
    const [[startline, startcolumn], [endline, endcolumn]] = sourcepos
    return new Span(
      new Position(startline, startcolumn),
      new Position(endline, endcolumn)
    )
  }
}
