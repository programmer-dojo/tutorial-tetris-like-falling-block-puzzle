import { FallingBlock } from "./FallingBlock";
import { CellColor } from "./PuzzleBlock";

export type Field = CellColor[][]

export function getHyojiField(field: Field, fallingBlock: FallingBlock): Field {
    let block    = fallingBlock.puzzleBlock
    let location = fallingBlock.location
    let copiedField = field.map(retu => retu.map(cell => cell))

    block.cells.forEach(cell => {
        copiedField[cell[0] + location[0]][cell[1] + location[1]] = block.color
    })
    copiedField[location[0]][location[1]] = block.color

    return copiedField
}

export function getGameOverField(field: Field): Field {
    return field.map((gyou) => {
        return gyou.map((cell) => cell === undefined ? undefined : 'gray')
    })
}