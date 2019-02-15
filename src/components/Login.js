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
    const { login } = this.props

    // prevent form submissions from
    // unwanted places like ENTER from clear button in inputs
    event.preventDefault()

    if (login) {
      const username = event.target.username.value
      const password = event.target.password.value
      login(username, password)
    }
  }

  handleEnterKeyDownUsername = value => {
    this.password.input.focus()
  }

  handleEnterKeyDownPassword = value => {
    this.submit.button.focus()
    this.submit.button.click()
  }

  render() {
    const { loggedIn, loggingIn } = this.props

    const loginForm = (
      <form style={styleForm} onSubmit={this.handleSubmit}>
        <label htmlFor="username" style={styleLabel}>
          username
        </label>
        <Input
          id="username"
          type="text"
          name="username"
          placeholder="your_username"
          onEnterKeyDown={this.handleEnterKeyDownUsername}
          ref={x => (this.username = x)}
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
    )

    const loggingInSpinner = <span>{'reticulating splines...'}</span>

    return (
      <div style={styleContainer}>
        {loggingIn ? loggingInSpinner : !loggedIn ? loginForm : null}
      </div>
    )
  }
}
export default Login
