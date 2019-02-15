import React from 'react'
import Layout from '../layout/Layout'
import ErrorContainer from './ErrorContainer'
import NavigationContainer from './NavigationContainer'
import LoginRequired from './LoginRequired'
import CounterContainer from './CounterContainer'

import { Route, Switch } from 'react-router'
import { ROUTE } from '../routing'

import LoginContainer from './LoginContainer'
import NotFound from './NotFound'

class GrioApp extends React.Component {
  render() {
    const { loggedIn, error } = this.props

    const alert = error ? <ErrorContainer /> : null

    const navigation = <NavigationContainer />

    const main = (
      <Switch>
        <Route
          exact
          path={ROUTE.home.path}
          component={loggedIn ? CounterContainer : LoginRequired}
        />
        <Route exact path={ROUTE.login.path} component={LoginContainer} />
        <Route exact path={ROUTE.error.path} component={Error} />
        <Route component={NotFound} />
      </Switch>
    )

    const counter = <CounterContainer />

    return (
      <Layout
        header={navigation}
        alert={alert}
        left={null}
        main={main}
        right={null}
        footer={null}
      />
    )
  }
}
export default GrioApp
