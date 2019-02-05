import React from 'react'
import { withTheme } from '../contexts/ThemeConsumer'

const style = {
  display: 'flex',
  overflowX: 'hidden',
  overflowY: 'auto',
  boxSizing: 'border-box',
  margin: '0 auto',
  width: '100%',
  outline: 'none',
}

class Main extends React.Component {
  render() {
    return (
      <main id="mainBlock" tabIndex="-1" style={style}>
        {this.props.children}
      </main>
    )
  }
}

const MainThemed = withTheme(Main)
export default MainThemed
