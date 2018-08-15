import { GET_SUDOKU, SET_DIFFICULTY, SET_FIELD_VALUE, RESET_SUDOKU, SOLVE_SUDOKU } from '../actions';
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
      let newBoard = [...state.board]
      newBoard.splice(action.ind, 1 , action.val)
      newBoard.join('');
      return {...state, board: newBoard}

    case RESET_SUDOKU:
      const resetedBoard = [...state.initialBoard]
      resetedBoard.join('')
      return { ...state, board: resetedBoard }

    case SOLVE_SUDOKU:
      const solvedSudoku = sudoku.solve([...state.board]);
      return { ...state, board: solvedSudoku}
    default:
      return state;
  }
}

export default reducers