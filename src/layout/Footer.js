import React from 'react'
import { withTheme } from '../contexts/ThemeConsumer'

const style = {
  flex: '0 0 auto',
  backgroundColor: '#222C37',
  zIndex: 2,
}

class Footer extends React.Component {
  render() {
    // ARIA "contentinfo" Landmark
    // https://www.w3.org/TR/wai-aria-practices/examples/landmarks/contentinfo.html
    return (
      <footer role="contentInfo" style={style}>
        {this.props.children}
      </footer>
    )
  }
}

const FooterThemed = withTheme(Footer)
export default FooterThemed
