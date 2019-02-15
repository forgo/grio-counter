export const ERROR_SHOW = 'ERROR_SHOW'
export const errorShow = (message) => {
  return {
    type: ERROR_SHOW,
    message: message
  }
}

export const ERROR_HIDE = 'ERROR_HIDE'
export const errorHide = () => {
  return {
    type: ERROR_HIDE,
  }
}
