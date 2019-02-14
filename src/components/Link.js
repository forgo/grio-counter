import React from 'react'
import { ROUTE } from '../routing'

const styleLink = {
  color: 'DeepSkyBlue',
}

export default class Link extends React.Component {
  render() {
    const { children, path, push } = this.props
    return (
      <a
        style={styleLink}
        onClick={() => {
          push(path)
        }}
      >
        {children}
      </a>
    )
  }
}
