import React, { useEffect, useState } from 'react';
import './App.css';
import { NUM_GYOU, NUM_RETU } from './Constant';
import { fall, FallingBlock, goLeft, goRight, isOk } from './FallingBlock';
import { clearGyou, Field, getClearedGyou, getGameOverField, getHyojiField } from './Field';
import GameField from './GameField';
import NextBlock from './NextBlock';
import { CellLocation, OBlock } from './PuzzleBlock';
import ShokyoCount from './ShokyoCount';

function App() {
  let [field, setField] = useState(
    [...new Array(NUM_GYOU) ].map(line => [...new Array(NUM_RETU)]) as Field
  )
  let [fallingBlock, setFallingBlock] = useState({
    puzzleBlock: OBlock,
    location   : [0, 4] as CellLocation
  } as FallingBlock)

  let [isGameOver, setIsGameOver] = useState(false)

  let [numDeleted, setNumDeleted] = useState(0)

  window.onkeydown= (e: KeyboardEvent) => {
    e.preventDefault()
    if (e.key === 'ArrowRight') {
      let nextBlock = goRight(fallingBlock)
      if (isOk(nextBlock, field)) {
        setFallingBlock(nextBlock)
      }
    } else if (e.key === 'ArrowLeft') {
      let nextBlock = goLeft(fallingBlock)
      if (isOk(nextBlock, field)) {
        setFallingBlock(nextBlock)
      }
    } else if (e.key === 'ArrowDown') {
      let nextBlock = fall(fallingBlock)
      if (isOk(nextBlock, field)) {
        setFallingBlock(nextBlock)
      } else {
        setField(getHyojiField(field, fallingBlock))
        setFallingBlock({
          puzzleBlock: OBlock,
          location   : [0, 4] as CellLocation
        })
      }
    }
  }

  useEffect(() => {
    if (!isGameOver) {
      if (getClearedGyou(field).length !== 0) {
        setField(clearGyou(field))
        setNumDeleted(num => num + getClearedGyou(field).length)
      }

      if (field[0].map(cell => cell === undefined).includes(false)) {
        setIsGameOver(true)
      }

      let falling = setInterval(() => {
        let nextBlock = fall(fallingBlock)
        if (isOk(nextBlock, field)) {
          setFallingBlock(nextBlock)
        } else {
          setField(getHyojiField(field, fallingBlock))
          setFallingBlock({
            puzzleBlock: OBlock,
            location   : [0, 4] as CellLocation
          })
        }
      }, 1000)
      return () => clearInterval(falling)
    }
  }, [isGameOver, field, fallingBlock])

  let hyoji = isGameOver
            ? getGameOverField(field)
            : getHyojiField(field, fallingBlock)

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex' }}>
          <div>
            <GameField field={hyoji}/>
          </div>
          <div>
            <NextBlock />
            <ShokyoCount number={numDeleted}/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
