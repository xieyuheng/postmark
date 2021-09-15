export abstract class Node {
  abstract kind: string
  span?: Span
  abstract json(): any
}

export abstract class ContainerNode extends Node {
  abstract children: Array<Node>
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
