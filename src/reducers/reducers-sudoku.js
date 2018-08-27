import { GET_SUDOKU, SET_DIFFICULTY, SET_FIELD_VALUE, RESET_SUDOKU, SOLVE_SUDOKU, CHECK_SUDOKU, UNDO_MOVE } from '../actions';
import sudoku from 'sudoku-umd';

const initialState = {
  initialBoard: '',
  board: '',
  difficulty: 'easy',
  check: false,
  pastBoard: ''
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
        initialBoard: sudokuString,
        pastBoard: sudokuString
      }

    case SET_FIELD_VALUE:
      let pastBoard = [...state.board];
      let newBoard = [...state.board];
      newBoard.splice(action.ind, 1 , action.val);
      newBoard.join('');
      return {...state, board: newBoard, pastBoard }

    case RESET_SUDOKU:
      const resetedBoard = [ ...state.initialBoard ]
      resetedBoard.join('')
      return { ...state, board: resetedBoard }

    case SOLVE_SUDOKU:
      const solvedSudoku = sudoku.solve( [...state.initialBoard] );
      return { ...state, board: solvedSudoku }

    case CHECK_SUDOKU:
      const check = sudoku.solve([...state.board]);
      if (check) {
        return { ...state, check: true }
      } else {
        return { ...state, check: false }
      }

    case UNDO_MOVE:
      let undo = [ ...state.pastBoard ];
      return { ...state, board: undo }

    default:
      return state;
  }
}

export default reducers