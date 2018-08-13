import { connect } from 'react-redux';
import Field from './Field'
import { setFieldValue } from '../../actions';

const mapDispatchToProps = dispatch => {
  return { setFieldValue: (index, val) => dispatch(setFieldValue(index, val)) }
}

export default connect(null, mapDispatchToProps)(Field);