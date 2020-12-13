import React from 'react';
import { SIZE_BLOCK, SIZE_NEXT_BLOCK_AREA } from './Constant';

function NextBlock(props: {}) {
    return (
        <div style={{
            border: 'khaki 1px solid',
            height: SIZE_BLOCK * SIZE_NEXT_BLOCK_AREA,
            width : SIZE_BLOCK * SIZE_NEXT_BLOCK_AREA
        }}>
            
        </div>
    );
}

export default NextBlock;