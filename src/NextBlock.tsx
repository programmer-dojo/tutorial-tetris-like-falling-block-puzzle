import React from 'react';
import { SIZE_BLOCK, SIZE_NEXT_BLOCK_AREA } from './Constant';
import { Field } from './Field';
import { PuzzleBlock } from './PuzzleBlock';

function NextBlock(props: {block: PuzzleBlock}) {
    let cells = [...props.block.cells, [0, 0]]
    let width  = Math.max(...cells.map(cell => cell[1])) - Math.min(...cells.map(cell => cell[1])) + 1
    let height = Math.max(...cells.map(cell => cell[0])) - Math.min(...cells.map(cell => cell[0])) + 1

    let gyouSlide = Math.min(...cells.map(cell => cell[0]))
    let retuSlide = Math.min(...cells.map(cell => cell[1]))

    let field = [...new Array(height)].map(retu => [...new Array(width)]) as Field
    cells.forEach((cell) => {
        field[cell[0] - gyouSlide][cell[1] - retuSlide] = props.block.color
    })
    return (
        <div style={{
            border: 'khaki 1px solid',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: (6 - height) * SIZE_BLOCK / 2,
            paddingBottom: (6 - height) * SIZE_BLOCK / 2,
            width : SIZE_BLOCK * SIZE_NEXT_BLOCK_AREA
        }}>
            {field.map(retu => {
                return <div style={{ height: SIZE_BLOCK }}>{
                    retu.map(cell => <div style={{
                        display: 'inline-block',
                        height: SIZE_BLOCK,
                        width : SIZE_BLOCK,
                        backgroundColor: cell
                    }}/>)
                }</div>
            })}
        </div>
    );
}

export default NextBlock;