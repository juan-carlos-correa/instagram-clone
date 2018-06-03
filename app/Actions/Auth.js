import firebase from '../Services/Firebase'

export const siginSuccess = payload => {
  return {
    type: 'SIGNIN_SUCCESS',
    payload
  }
}

export const siginErrorData = payload => {
  return {
    type: 'SIGNIN_ERROR_DATA',
    payload
  }
}

export const fetchSignInWithEmailAndPassword = payload => {
  return async function (dispatch) {
    try {
      const response = await firebase.signInWithEmailAndPassword(payload)

      if (response) {
        dispatch(siginSuccess({ success: true }))
        dispatch(siginErrorData({ code: null, name: null }))
      }
    } catch (e) {
      const { code, name } = e
      dispatch(siginSuccess({ success: false }))
      dispatch(siginErrorData({ code, name }))
    }
  }
}
