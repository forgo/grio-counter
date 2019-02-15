import React from 'react'
import NavigationContainer from './NavigationContainer'

const styleContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const styleH1 = { fontSize: '1.618em', margin: 0, padding: 0 }

class Header extends React.Component {
  render() {
    return (
      <div style={styleContainer}>
        <h1 style={styleH1}>GRIO COUNTER</h1>
        <NavigationContainer />
      </div>
    )
  }
}
export default Header
