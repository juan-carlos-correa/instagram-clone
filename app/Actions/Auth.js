import firebase from '../Services/Firebase'

export const signUpSuccess = payload => {
  return {
    type: 'SIGNIN_SUCCESS',
    payload
  }
}

export const signUpErrorData = payload => {
  return {
    type: 'SIGNIN_ERROR_DATA',
    payload
  }
}

export const fetchSignUpWithEmailAndPassword = payload => {
  return async function (dispatch) {
    try {
      const response = await firebase.signUpWithEmailAndPassword(payload)

      if (response) {
        dispatch(signUpSuccess({ success: true }))
        dispatch(signUpErrorData({ code: null, name: null }))
      }
    } catch (e) {
      const { code, name } = e
      dispatch(signUpSuccess({ success: false }))
      dispatch(signUpErrorData({ code, name }))
    }
  }
}
