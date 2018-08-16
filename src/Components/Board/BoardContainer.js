import { connect } from 'react-redux';
import Board from './Board';


const mapStateToProps = store => {
  return {
    board: store.sudokuReducer.board
  }
}
export default connect(mapStateToProps)(Board);