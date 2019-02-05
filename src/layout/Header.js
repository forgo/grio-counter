import React from 'react'
import { withTheme } from '../contexts/ThemeConsumer'

const styleHeader = {
  flex: '0 0 auto',
  zIndex: 2,
}

class Header extends React.Component {
  render() {
    // ARIA "banner" Landmark
    // https://www.w3.org/TR/wai-aria-practices/examples/landmarks/banner.html
    return (
      <header role="banner" style={styleHeader}>
        {this.props.children}
      </header>
    )
  }
}

const HeaderThemed = withTheme(Header)
export default HeaderThemed
