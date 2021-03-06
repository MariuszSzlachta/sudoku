export const SET_DIFFICULTY = 'SET-DIFFICULTY';
export const GET_SUDOKU = 'GET_SUDOKU';
export const CHECK_SUDOKU = 'CHECK_SUDOKU';
export const SOLVE_SUDOKU = 'SOLVE_SUDOKU';
export const RESET_SUDOKU = 'RESET_SUDOKU';
export const LOG_STATE = 'LOG_STATE';
export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';
export const UNDO_MOVE = 'UNDO_MOVE';


export function setDifficulty(difficulty) {
  return {
    type: SET_DIFFICULTY,
    difficulty
  }
}
export function getSudoku() {
  return {
    type: GET_SUDOKU,
  }
}

export function logState(state) {
  return {
    type: GET_SUDOKU,
    state
  }
}

export function setFieldValue(ind, val){
  return {
    type: SET_FIELD_VALUE,
    ind,
    val
  }
}

export function resetSudoku(){
  return {
    type: RESET_SUDOKU
  }
}

export function solveSudoku(){
  return {
    type: SOLVE_SUDOKU
  }
}

export function checkSudoku(){
  return {
    type: CHECK_SUDOKU
  }
}

export function undoMove(){
  return {
    type: UNDO_MOVE
  }
}