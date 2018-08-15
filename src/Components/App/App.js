import React, { Component } from 'react';
import './App.css';
import store from '../../store';
import { getSudoku, resetSudoku, solveSudoku } from '../../actions';

import Board from '../Board/BoardContainer';

class App extends Component {

  getSudoku() {
    store.dispatch(getSudoku());
  }

  resetSudoku() {
    store.dispatch(resetSudoku());
  }

  solveSudoku() {
    store.dispatch(solveSudoku());
  }

  render() {
    return (
      <div className="App">
        <Board />
        <div>
          <button>Check</button>
          <button onClick={this.getSudoku} >New Game</button>
          <button onClick={this.solveSudoku}>Solve</button>
          <button onClick={this.resetSudoku}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
