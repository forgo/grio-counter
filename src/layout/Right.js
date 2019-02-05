import React from 'react'
import { withTheme } from '../contexts/ThemeConsumer'

const style = (background, foreground, width, boxShadow) => {
  return {
    color: foreground,
    background: background,
    transition: 'flex 0.2s linear',
    flex: '0 0 ' + width,
    width: width,
    minWidth: '3.236em',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: boxShadow,
  }
}

class Right extends React.Component {
  render() {
    const { colorContext, shadowContext, spacingContext } = this.props

    const { background, foreground } = colorContext.right
    const { width } = spacingContext.right
    const { boxShadow } = shadowContext

    return (
      <div style={style(background, foreground, width, boxShadow)}>
        {this.props.children}
      </div>
    )
  }
}

const RightThemed = withTheme(Right)
export default RightThemed
