import { GET_SUDOKU, SET_DIFFICULTY, SET_FIELD_VALUE } from '../actions';
import sudoku from 'sudoku-umd';

const initialState = {
  initialBoard: '',
  board: '',
  difficulty: 'easy'
}

const reducers =  function(state = initialState, action){
  switch(action.type) {
    case SET_DIFFICULTY:
      return {...state, difficulty: action.difficulty}

    case GET_SUDOKU:
      const level = state.difficulty;
      const sudokuString = sudoku.generate(level);
      return {
        difficulty: level,
        board: sudokuString,
        initialBoard: sudokuString
      }
    case SET_FIELD_VALUE:
      // kopia
      let board = [...state.board];
      // do arraya
      board.split('');
      // board[action.id] = action.val;
      // board.join();
      console.log(board);
      return {
        ...state, board
      }
    default:
      return state;
  }
}

export default reducers