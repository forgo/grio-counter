export const ERROR_SHOW = 'ERROR_SHOW'
export const errorShow = (message) => {
  return {
    type: ERROR_SHOW,
    message: message
  }
}

export const ERROR_HIDE = 'ERROR_HIDE'
export const errorHide = () => {
  console.log("ERROR_HDIE")
  return {
    type: ERROR_HIDE,
  }
}
