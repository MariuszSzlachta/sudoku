import { connect } from 'react-redux';
import Board from './Board';

const mapStateToProps = state => {
  const { board } = state.sudokuReducer;
  return {
    board
  }
}
export default connect(mapStateToProps)(Board);