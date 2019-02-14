import { connect } from 'react-redux'
import GrioApp from './GrioApp'

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    error: state.error.message,
  }
}

const GrioAppContainer = connect(
  mapStateToProps,
  null
)(GrioApp)
export default GrioAppContainer
