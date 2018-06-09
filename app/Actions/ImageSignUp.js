export const clearImageSignUp = () => {
  return function (dispatch) {
    dispatch({ type: 'CLEAR_IMAGE' })
  }
}

export const loadImageSignUp = (payload) => {
  console.log('action', payload)
  return function (dispatch) {
    dispatch({
      type: 'LOAD_IMAGE_SIGNUP',
      payload
    })
  }
}
