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
  render() {
    const { push } = this.props
    return (
      <nav role="navigation">
        <ul style={styleList}>
          <li style={styleListItem}>
            <A path={ROUTE.home.path}>Home</A>
          </li>
          <li style={styleListItem}>
            <A path={ROUTE.login.path}>Login</A>
          </li>
        </ul>
      </nav>
    )
  }
}
