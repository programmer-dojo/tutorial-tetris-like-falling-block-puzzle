import React from 'react';
import { NUM_RETU, SIZE_BLOCK } from './Constant';
import { Field } from './Field';

function GameField(props: { field: Field }) {
    return (
        <div>
            {props.field.map((gyou, gyouNo) => {
                return <div
                    key={`gyou-${gyouNo}`}
                    style={{
                        height: SIZE_BLOCK,
                        width : SIZE_BLOCK * NUM_RETU
                    }}
                >{gyou.map((cell, cellNo) => {
                    return <div key={`cell-${gyouNo}-${cellNo}`} style={{
                        backgroundColor: cell,
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