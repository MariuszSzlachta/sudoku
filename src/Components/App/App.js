import React, { Component } from 'react';
import './App.css';
import store from '../../store';
import { getSudoku, resetSudoku, solveSudoku, checkSudoku, undoMove, setDifficulty } from '../../actions';

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

  checkSudoku() {
    store.dispatch(checkSudoku())
    const stateCheck = store.getState(store.sudokuReducer);
    if (stateCheck.sudokuReducer.check) {
      alert('Dobrze Ci idzie')
    } else {
      alert('To nie ta cyfra')
    }
  }

  setDifficulty(difficulty){
    store.dispatch(setDifficulty(difficulty));
  }

  undoMoveHandler(){
    store.dispatch(undoMove());
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Sudoku</h1>
        <Board />
        <div className="btn-container">
          <select onChange={ (event) => this.setDifficulty(event.target.value) } name="sudoku-difficulty" class="select">
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
            <option value="very hard">very hard</option>
            <option value="insane">insane</option>
            <option value="inhuman">inhuman</option>
          </select>
          <button className="btn" onClick={this.getSudoku}>New Game</button>
          <button className="btn" onClick={this.checkSudoku}>Check</button>
          <button className="btn" onClick={this.undoMoveHandler}>Undo</button>
          <button className="btn" onClick={this.resetSudoku}>Reset</button>
          <button className="btn" onClick={this.solveSudoku}>Solve</button>
        </div>
      </div>
    );
  }
}

export default App;
