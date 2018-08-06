import { GET_SUDOKU, SET_DIFFICULTY } from './actions';
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
        ...state,
        board: sudokuString,
        initialBoard: sudokuString
      }

    default:
      return state;
  }
}

export default reducers