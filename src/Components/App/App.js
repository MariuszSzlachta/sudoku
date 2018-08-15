import React, { Component } from 'react';
import './App.css';
import store from '../../store';
import { getSudoku, resetSudoku } from '../../actions';

import Board from '../Board/BoardContainer';

class App extends Component {

  getSudoku() {
    store.dispatch(getSudoku());
  }
  resetSudoku() {
    store.dispatch(resetSudoku());
  }

  render() {
    return (
      <div className="App">
        <Board />
        <div>
          <button>Check</button>
          <button onClick={this.getSudoku} >New Game</button>
          <button>Solve</button>
          <button onClick={this.resetSudoku}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
