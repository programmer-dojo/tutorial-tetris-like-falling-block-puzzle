import React from 'react';

function ShokyoCount(props: { number: number}) {
    return (
        <div style={{
            marginTop: '10%',
            border: '1px solid khaki'
        }}>
            <div style={{
                borderBottom: '1px solid khaki',
                color: 'khaki',
                fontSize: '1.2rem'
            }}>
                削除した数
            </div>
            <div style={{
                textAlign: 'end',
                paddingLeft: '5%',
                paddingRight: '5%',
                color: 'khaki'
            }}>
                {props.number}
            </div>
            
        </div>
    );
}

export default ShokyoCount;