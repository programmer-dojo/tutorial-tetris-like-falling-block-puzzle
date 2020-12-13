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