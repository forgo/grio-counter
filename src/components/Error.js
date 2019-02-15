import React from 'react'

class Error extends React.Component {
  render() {
    const { error, errorHide } = this.props
    if (error) {
      return (
        <div>
          <span>{error}</span>
          <button onClick={errorHide}>x</button>
        </div>
      )
    }
    return null
  }
}
export default Error
