import React, { Component } from 'react';
import './App.css';
import store from '../../store';
import { getSudoku } from '../../actions';

import Board from '../Board/BoardContainer';

class App extends Component {

  getSudoku() {
    store.dispatch(getSudoku());
  }

  render() {
    return (
      <div className="App">
        <Board />
        <div>
          <button>Check</button>
          <button onClick={this.getSudoku} >New Game</button>
          <button>Solve</button>
          <button>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
