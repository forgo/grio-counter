import React from 'react'
import Layout from '../layout/Layout'
import Button from './Button'
import { boxShadowNormal } from '../contexts/ShadowContext'

const styleContainer = {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}

const styleCount = {
  fontSize: '3em',
  // background: 'blue',
  color: 'black',
  // borderRadius: '0.618em',
  textAlign: 'center',
  padding: '0.309em 0.618em',
  margin: '0 0 0.309em 0',
  transition: 'font-size 1s',
}

const styleCountUpdate = {
  fontSize: '4em',
}

const styleButton = {
  margin: '0 auto 0.309em auto',
  boxShadow: boxShadowNormal,
}

export default class Counter extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.calculating && !this.props.calculating) {
      console.log('trigger')
    }
  }

  render() {
    const { count, incrementCounter, calculating } = this.props

    return (
      <div style={styleContainer}>
        <div>
          <div style={styleCount}>{count}</div>
          <Button
            style={styleButton}
            text="Increment"
            title="Increment counter"
            onClick={() => incrementCounter(count)}
            disabled={calculating}
            disabledText={'Calculating...'}
          />
        </div>
      </div>
    )
  }
}
