import { NUM_GYOU, NUM_RETU } from "./Constant";
import { Field } from "./Field";
import { CellLocation, PuzzleBlock } from "./PuzzleBlock";

export type FallingBlock = {
    puzzleBlock: PuzzleBlock,
    location: CellLocation
}

export function fall(fallingBlock: FallingBlock): FallingBlock {
    return {
        puzzleBlock: fallingBlock.puzzleBlock,
        location   : [ fallingBlock.location[0] + 1, fallingBlock.location[1] ]
    }
}

export function goRight(fallingBlock: FallingBlock): FallingBlock {
    return {
        puzzleBlock: fallingBlock.puzzleBlock,
        location   : [ fallingBlock.location[0], fallingBlock.location[1] + 1]
    }
}

export function goLeft(fallingBlock: FallingBlock): FallingBlock {
    return {
        puzzleBlock: fallingBlock.puzzleBlock,
        location   : [ fallingBlock.location[0], fallingBlock.location[1] - 1]
    }
}

export function isOk(fallingBlock: FallingBlock, field: Field): boolean {
    function isGyouOk(cell: CellLocation): boolean {
        return (0 <= cell[0]) && (cell[0] <= NUM_GYOU - 1)
    }

    function isRetuOk(cell: CellLocation): boolean {
        return (0 <= cell[1]) && (cell[1] <= NUM_RETU - 1)
    }

    function isFieldOk(cell: CellLocation): boolean {
        return field[cell[0]][cell[1]] === undefined
    }

    return [...fallingBlock.puzzleBlock.cells, [0, 0] as CellLocation ]
        .map((cell) => [
            cell[0] + fallingBlock.location[0],
            cell[1] + fallingBlock.location[1]
        ] as CellLocation)
        .reduce((acc: boolean, cell: CellLocation) => {
            return acc && isGyouOk(cell) && isRetuOk(cell) && isFieldOk(cell)
        }, true)
}