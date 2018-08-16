import { connect } from 'react-redux';
import Field from './Field'
import { setFieldValue } from '../../actions';

const mapDispatchToProps = dispatch => {
  return { setFieldValue: (index, val) => dispatch(setFieldValue(index, val)) }
}

const mapStateToProps = store => {
  return {
    initialBoard: store.sudokuReducer.initialBoard
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);