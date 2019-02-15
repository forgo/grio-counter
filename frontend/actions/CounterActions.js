export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const incrementCounter = count => {
  return {
    type: INCREMENT_COUNTER,
    count: count,
  }
}

export const INCREMENT_COUNTER_SUCCESS = 'INCREMENT_COUNTER_SUCCESS'
export const incrementCounterSuccess = count => {
  return {
    type: INCREMENT_COUNTER_SUCCESS,
    count: count,
  }
}

export const INCREMENT_COUNTER_FAILURE = 'INCREMENT_COUNTER_FAILURE'
export const incrementCounterFailure = error => {
  return {
    type: INCREMENT_COUNTER_FAILURE,
    error: error,
  }
}
