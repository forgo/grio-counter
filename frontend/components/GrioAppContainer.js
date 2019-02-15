import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import GrioApp from './GrioApp'

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    loggingIn: state.auth.loggingIn,
    message: state.notification.message,
    isError: state.notification.isError,
  }
}

const GrioAppContainer = withRouter(
  connect(
    mapStateToProps,
    null
  )(GrioApp)
)
export default GrioAppContainer
