export const WHO_AM_I = 'WHO_AM_I'
export const whoAmI = () => {
  console.log("whoAmI ACTION")
  return {
    type: WHO_AM_I
  }
}

export const WHO_AM_I_SUCCESS = 'WHO_AM_I_SUCCESS'
export const whoAmISuccess = user => {
  return {
    type: WHO_AM_I_SUCCESS,
    user: user
  }
}

export const WHO_AM_I_FAILURE = 'WHO_AM_I_FAILURE'
export const whoAmIFailure = error => {
  return {
    type: WHO_AM_I_FAILURE,
    error: error
  }
}

export const LOGIN = 'LOGIN'
export const login = (username, password) => {
  return {
    type: LOGIN,
    username: username,
    password: password
  }
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const loginSuccess = user => {
  console.log("login_success user =", user)
  return {
    type: LOGIN_SUCCESS,
    user: user,
  }
}

export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    error: error,
  }
}

export const LOGOUT = 'LOGOUT'
export const logout = () => {
  return {
    type: LOGOUT
  }
}
