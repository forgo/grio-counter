import React from 'react'
import { ROUTE } from '../routing'

const styleLink = {
  color: 'DeepSkyBlue',
}

export default class Link extends React.Component {
  render() {
    const { children, onClick, path, push } = this.props

    let action = onClick
    if (path) {
      action = () => {
        push(path)
      }
    }

    return (
      <a style={styleLink} onClick={action}>
        {children}
      </a>
    )
  }
}
