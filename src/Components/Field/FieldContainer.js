import { connect } from 'react-redux';
import Field from './Field'
import { setFieldValue } from '../../actions';

const mapDispatchToProps = dispatch => {
  return { setFieldValue: (text) => dispatch(setFieldValue(text)) }
}

export default connect(null, mapDispatchToProps)(Field);