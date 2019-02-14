import React from 'react'
import Input from './Input'
import Button from './Button'
import { boxShadowNormal } from '../contexts/ShadowContext'

const styleContainer = {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
}

const styleForm = {
  display: 'flex',
  flexDirection: 'column',
}

const styleLabel = {
  display: 'block',
  fontWeight: 'bold',
  margin: '0 0 0.309em 0',
}

const styleInputContainer = {
  margin: '0 0 1.618em 0',
}

const styleButton = {
  boxShadow: boxShadowNormal,
}

class Login extends React.Component {
  handleSubmit = event => {
    // prevent form submissions from
    // unwanted places like ENTER from clear button in inputs
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    console.log(`email: ${email}, password: ${password}`)
  }

  handleEnterKeyDownEmail = value => {
    this.password.input.focus()
  }

  handleEnterKeyDownPassword = value => {
    this.submit.button.focus()
    this.submit.button.click()
  }

  render() {
    return (
      <div style={styleContainer}>
        <form style={styleForm} onSubmit={this.handleSubmit}>
          <label htmlFor="email" style={styleLabel}>
            email
          </label>
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="your_username"
            onEnterKeyDown={this.handleEnterKeyDownEmail}
            ref={x => (this.email = x)}
            styleInputContainer={styleInputContainer}
          />
          <label htmlFor="password" style={styleLabel}>
            password
          </label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="yourPassword123"
            onEnterKeyDown={this.handleEnterKeyDownPassword}
            ref={x => (this.password = x)}
            styleInputContainer={styleInputContainer}
          />
          <Button
            type="submit"
            style={styleButton}
            text="Login"
            title="Login with credentials"
            disabled={false}
            disabledText={'Authenticating...'}
            ref={x => (this.submit = x)}
          />
        </form>
      </div>
    )
  }
}
export default Login
