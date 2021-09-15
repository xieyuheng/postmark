export abstract class Node {
  abstract kind: string
  span?: Span
  abstract json(): any
}

export class Span {
  start: Position
  end: Position

  constructor(start: Position, end: Position) {
    this.start = start
    this.end = end
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
