import React, { useEffect, useState } from 'react';
import './App.css';
import { NUM_GYOU, NUM_RETU } from './Constant';
import { fall, FallingBlock, goLeft, goRight, isOk, rotate } from './FallingBlock';
import { clearGyou, Field, getClearedGyou, getGameOverField, getHyojiField } from './Field';
import GameField from './GameField';
import NextBlock from './NextBlock';
import { CellLocation, getRandomBlock } from './PuzzleBlock';
import ShokyoCount from './ShokyoCount';

function App() {
  let [field, setField] = useState(
    [...new Array(NUM_GYOU) ].map(line => [...new Array(NUM_RETU)]) as Field
  )
  let [fallingBlock, setFallingBlock] = useState({
    puzzleBlock: getRandomBlock(),
    location   : [0, 4] as CellLocation,
    rotation   : 0
  } as FallingBlock)

  let [isGameOver, setIsGameOver] = useState(false)

  let [numDeleted, setNumDeleted] = useState(0)

  let [next, setNext] = useState(getRandomBlock())

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
          puzzleBlock: next,
          location   : [0, 4] as CellLocation,
          rotation   : 0
        })
        setNext(getRandomBlock())
      }
    } else if (e.key === 'ArrowUp') {
      let nextBlock = rotate(fallingBlock)
      if (isOk(nextBlock, field)) {
        setFallingBlock(nextBlock)
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
            puzzleBlock: next,
            location   : [0, 4] as CellLocation,
            rotation   : 0
          })
          setNext(getRandomBlock())
        }
      }, 1000)
      return () => clearInterval(falling)
    }
  }, [isGameOver, field, fallingBlock, next])

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
            <NextBlock block={next} />
            <ShokyoCount number={numDeleted}/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
