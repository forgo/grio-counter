import { connect } from 'react-redux'
import Error from './Error'
import { errorHide } from '../actions/ErrorActions'

const mapStateToProps = state => {
  return {
    error: state.error.message,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    errorHide: () => dispatch(errorHide()),
  }
}

const ErrorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Error)
export default ErrorContainer
