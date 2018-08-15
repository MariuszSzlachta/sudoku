import React, { Component } from 'react';
import './App.css';
import store from '../../store';
import { getSudoku, resetSudoku, solveSudoku, checkSudoku } from '../../actions';

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

  checkSudoku(){
    store.dispatch(checkSudoku())
    const stateCheck = store.getState(store.sudokuReducer);
    if (stateCheck.sudokuReducer.check) {
      alert('Dobrze Ci idzie')
    } else {
      alert('To nie ta cyfra')
    }
  }

  render() {
    return (
      <div className="App">
        <Board />
        <div>
          <button onClick={this.checkSudoku}>Check</button>
          <button onClick={this.getSudoku} >New Game</button>
          <button onClick={this.solveSudoku}>Solve</button>
          <button onClick={this.resetSudoku}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
