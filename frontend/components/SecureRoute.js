import React from 'react'
import { Route, Redirect } from 'react-router'
import { ROUTE } from '../routing'

export default class SecureRoute extends React.Component {
  render() {
    const { component: Component, ...props } = this.props
    return (
      <Route
        {...props}
        render={props =>
          this.props.loggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to={ROUTE.login.path} />
          )
        }
      />
    )
  }
}
