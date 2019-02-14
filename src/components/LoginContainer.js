import { connect } from 'react-redux'
import Login from './Login'
import { login } from '../actions/AuthActions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (username, password) => dispatch(login(username, password)),
  }
}

const LoginContainer = connect(
  null,
  mapDispatchToProps
)(Login)
export default LoginContainer
