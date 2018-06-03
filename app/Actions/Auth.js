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

export const setUserData = payload => {
  return {
    type: 'SET_USER_DATA',
    payload
  }
}

export const fetchSignUpWithEmailAndPassword = payload => {
  return async function (dispatch) {
    try {
      const response = await firebase.signUpWithEmailAndPassword(payload)
      // console.log(response)

      if (response) {
        const { email, uid } = response.user
        const username = payload.username

        // todo: write user data on verify email
        await firebase.writeUserData({ uid, email, username, imageUrl: null })
        dispatch(signUpSuccess({ success: true }))
        dispatch(setUserData({ email, uid, username }))
        dispatch(signUpErrorData({ code: null, name: null }))
      }
    } catch (e) {
      const { code, name } = e
      dispatch(signUpSuccess({ success: false }))
      dispatch(signUpErrorData({ code, name }))
    }
  }
}
