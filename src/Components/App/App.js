import React, { Component } from 'react';
import './App.css';
import store from '../../store';
import { getSudoku, resetSudoku, solveSudoku, checkSudoku, undoMove } from '../../actions';

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

  undoMoveHandler(){
    store.dispatch(undoMove());
  }

  render() {
    return (
      <div className="App">
        <Board />
        <div className="btn-container">
          <button className="btn" onClick={this.checkSudoku}>Check</button>
          <button className="btn" onClick={this.getSudoku}>New Game</button>
          <button className="btn" onClick={this.solveSudoku}>Solve</button>
          <button className="btn" onClick={this.resetSudoku}>Reset</button>
          <button className="btn" onClick={this.undoMoveHandler}>Undo</button>
        </div>
      </div>
    );
  }
}

export default App;
