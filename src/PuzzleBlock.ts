export type CellLocation = [number, number]
export type CellColor = string|undefined

export type PuzzleBlock = {
    name : 'O',
    cells: [CellLocation, CellLocation, CellLocation],
    color: CellColor
}


export const OBlock: PuzzleBlock = {
    name : 'O',
    cells: [[1, 0], [0, 1], [1, 1]],
    color: 'lightyellow'
}