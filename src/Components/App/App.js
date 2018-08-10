import React, { Component } from 'react';
import './App.css';

import Board from '../Board/BoardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
        <div>
          <button>Check</button>
          <button>New Game</button>
          <button>Solve</button>
          <button>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
