import React from 'react'
import Button from './Button'

const styleContainer = display => {
  return {
    display: display ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    background: 'rgba(0,0,0,0.618)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
}
const styleContent = {
  background: '#F9F9F9',
  padding: '1em',
  border: '1px solid black',
  borderRadius: '0.618em',
  color: 'black',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const styleCountWrapper = {
  margin: '0 0 1.618em 0',
}

const styleCountLabel = {
  fontWeight: 'bold',
  display: 'block',
  textDecoration: 'underline',
}

const styleCount = {
  display: 'block',
  textAlign: 'center',
}

const styleCancelButton = {
  background: 'red',
}

const styleConfirmButton = {}

class CounterPopup extends React.Component {
  render() {
    const {
      count,
      nextCount,
      calculating,
      popup,
      popupCancel,
      popupConfirm,
    } = this.props

    return (
      <div style={styleContainer(popup)}>
        <div style={styleContent}>
          <div style={styleCountWrapper}>
            <label htmlFor="popupCount" style={styleCountLabel}>
              Current Count
            </label>
            <output id="popupCount" name="popupCount" style={styleCount}>
              {count}
            </output>
          </div>

          <div style={styleCountWrapper}>
            <label htmlFor="popupCountNext" style={styleCountLabel}>
              Next Count
            </label>
            <output
              id="popupCountNext"
              name="popupCountNext"
              style={styleCount}
            >
              {nextCount}
            </output>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              style={styleCancelButton}
              text="Cancel"
              title="Cancel increment counter"
              onClick={popupCancel}
              disabled={false}
            />
            <Button
              style={styleConfirmButton}
              text="Confirm"
              title="Confirm increment counter"
              onClick={() => popupConfirm(nextCount)}
              disabled={false}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default CounterPopup
