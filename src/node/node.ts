import * as Commonmark from "../vendor/commonmark"

export abstract class Node {
  abstract kind: string
  abstract json(): any
}

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

export class Position {
  line: number
  column: number

  constructor(line: number, column: number) {
    this.line = line
    this.column = column
  }
}
