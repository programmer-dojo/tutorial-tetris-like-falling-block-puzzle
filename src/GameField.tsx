import React from 'react';
import { NUM_GYOU, NUM_RETU, SIZE_BLOCK } from './Constant';

function GameField(props: {}) {
    let field = [...new Array(NUM_GYOU) ]
        .map(line => [...new Array(NUM_RETU)])
    return (
        <div>
            {field.map((gyou, gyouNo) => {
                return <div
                    key={`gyou-${gyouNo}`}
                    style={{
                        height: SIZE_BLOCK,
                        width : SIZE_BLOCK * NUM_RETU
                    }}
                >{gyou.map((cell, cellNo) => {
                    return <div key={`cell-${gyouNo}-${cellNo}`} style={{
                        display: 'inline-block',
                        width  : SIZE_BLOCK,
                        height : SIZE_BLOCK,
                        border : '1px khaki solid',
                        boxSizing: 'border-box'
                    }} />
                })}</div>
            })}
        </div>
    );
}

export default GameField;