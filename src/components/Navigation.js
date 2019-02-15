import React from 'react'
import { default as A } from './LinkContainer'
import { ROUTE } from '../routing'

const styleList = {
  margin: 0,
  padding: 0,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  listStyle: 'none',
}

const styleListItem = {
  margin: '0 0.309em',
}

const styleLink = {
  color: 'DeepSkyBlue',
}

export default class Navigation extends React.Component {
  handleLogout = event => {
    const { logout } = this.props
    if (logout) {
      logout()
    }
  }

  render() {
    const { loggingIn, loggedIn, user, logout } = this.props
    console.log('props', this.props)

    const linkHome = (
      <li style={styleListItem}>
        <A path={ROUTE.home.path}>Home</A>
      </li>
    )

    const linkLogin = loggedIn ? null : (
      <li style={styleListItem}>
        <A path={ROUTE.login.path}>Login</A>
      </li>
    )

    const linkLogout = loggedIn ? (
      <li style={styleListItem}>
        <a onClick={this.handleLogout}>Logout</a>
      </li>
    ) : null

    return (
      <nav role="navigation">
        <ul style={styleList}>
          {linkHome}
          {linkLogin}
          {linkLogout}
        </ul>
      </nav>
    )
  }
}
