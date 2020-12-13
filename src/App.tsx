import React from 'react';
import './App.css';
import GameField from './GameField';
import NextBlock from './NextBlock';
import ShokyoCount from './ShokyoCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex' }}>
          <div>
            <GameField />
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
