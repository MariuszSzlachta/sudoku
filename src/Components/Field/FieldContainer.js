import { connect } from 'react-redux';
import Field from './Field'
import { setFieldValue } from '../../actions';

const mapDispatchToProps = dispatch => {
  return { setFieldValue: (index, val) => dispatch(setFieldValue(index, val)) }
}

const mapStateToProps = state => {
  const { initialBoard } = state.sudokuReducer;
  const { board } = state.sudokuReducer;
  return {
    initialBoard,
    board
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);