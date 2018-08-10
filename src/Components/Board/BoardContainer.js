import { connect } from 'react-redux';
import Board from './Board';


const mapStateToProps = state => {
  return {
    board: state.sudokuReducer.board
  }
}
export default connect(mapStateToProps)(Board);