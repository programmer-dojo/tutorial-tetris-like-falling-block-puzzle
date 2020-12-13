export type CellLocation = [number, number]
export type CellColor = string|undefined

export type PuzzleBlock = {
    name : 'O'|'I'|'L'|'J'|'S'|'Z'|'T',
    cells: [CellLocation, CellLocation, CellLocation],
    color: CellColor
}

export const OBlock: PuzzleBlock = {
    name : 'O',
    cells: [[1, 0], [0, 1], [1, 1]],
    color: 'lightyellow'
}

export const IBlock: PuzzleBlock = {
    name : 'I',
    cells: [ [0, 1], [0, 2], [0, -1] ],
    color: 'royalblue'
}

export const LBlock: PuzzleBlock = {
    name : 'J',
    cells: [ [1, 0], [2, 0], [0, 1] ],
    color: 'blue'
}

export const JBlock: PuzzleBlock = {
    name: 'L',
    cells: [ [1, 0], [2, 0], [0, -1] ],
    color: 'orange'
}

export const SBlock: PuzzleBlock = {
    name : 'S',
    cells: [ [0, 1], [1, 0], [1, -1] ],
    color: 'green'
}

export const ZBlock: PuzzleBlock = {
    name : 'Z',
    cells: [ [0, -1], [1, 0], [1, 1] ],
    color: 'red'
}

export const TBlock: PuzzleBlock = {
    name: 'T',
    cells: [ [1, 0], [0, 1], [0, -1] ],
    color: 'purple'
}

export function getRandomBlock(): PuzzleBlock {
    return [
        IBlock,
        LBlock,
        JBlock,
        SBlock,
        ZBlock,
        TBlock,
        OBlock
    ][Math.floor(Math.random() * 7)]
}