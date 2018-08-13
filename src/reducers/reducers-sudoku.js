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
      const board = [...state.board];
      console.log(board);
      const newBoard = board.map(el => {
        if (board.indexOf(el) === action.id){
          return el = action.val
        }
      })
      newBoard.join('')
      return Object.assign({}, state, {board: newBoard})

    default:
      return state;
  }
}

export default reducers