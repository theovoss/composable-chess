import React from 'react';
import logo from './logo.svg';
import Board from './chess/Board.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Let's play a game!</p>
        <Board />
      </header>
    </div>
  );
}

export default App;
