import React, { useState } from 'react';
import './App.css';
import { NUM_GYOU, NUM_RETU } from './Constant';
import { FallingBlock } from './FallingBlock';
import { Field, getHyojiField } from './Field';
import GameField from './GameField';
import NextBlock from './NextBlock';
import { CellLocation, OBlock } from './PuzzleBlock';
import ShokyoCount from './ShokyoCount';

function App() {
  let field: Field = [...new Array(NUM_GYOU) ]
        .map(line => [...new Array(NUM_RETU)])
  let [fallingBlock, setFallingBlock] = useState({
    puzzleBlock: OBlock,
    location   : [0, 4] as CellLocation
  } as FallingBlock)

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex' }}>
          <div>
            <GameField field={getHyojiField(field, fallingBlock)}/>
          </div>
          <div>
            <NextBlock />
            <ShokyoCount />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
