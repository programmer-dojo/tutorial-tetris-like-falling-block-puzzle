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

export function getClearedGyou(field: Field): number[] {
    return field.reduce((acc, line, lineNo) => {
        if (line.includes(undefined)) {
            return acc
        } else {
            return [...acc, lineNo ]
        }
    }, [] as number[])
}

export function clearGyou(field: Field): Field {
    let newField = field.map(gyou => gyou.map(cell => cell))
    let gyou = getClearedGyou(field)

    field.forEach((line, index) => {
        if (!gyou.includes(index)) {
            let numDown = gyou
                .filter(gyouNo => index < gyouNo)
                .length
            newField[index + numDown] = field[index].concat()
            }
        })
    return newField
}