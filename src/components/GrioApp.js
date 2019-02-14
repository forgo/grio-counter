import React from 'react'
import Layout from '../layout/Layout'
import Navigation from './Navigation'
import CounterContainer from './CounterContainer'

import { Route, Switch } from 'react-router'
import { ROUTE } from '../routing'

import Login from './Login'
import NotFound from './NotFound'

class GrioApp extends React.Component {
  render() {
    const navigation = <Navigation />

    const main = (
      <Switch>
        <Route exact path={ROUTE.home.path} component={CounterContainer} />
        <Route exact path={ROUTE.login.path} component={Login} />
        <Route exact path={ROUTE.error.path} component={Error} />
        <Route component={NotFound} />
      </Switch>
    )

    const counter = <CounterContainer />

    return (
      <Layout
        header={navigation}
        left={null}
        main={main}
        right={null}
        footer={null}
      />
    )
  }
}
export default GrioApp
