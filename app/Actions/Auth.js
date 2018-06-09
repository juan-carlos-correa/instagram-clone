import firebase from '../Services/Firebase'

export const signInSuccess = payload => {
  return {
    type: 'SIGNIN_SUCCESS',
    payload
  }
}

export const signInErrorData = payload => {
  return {
    type: 'SIGNIN_ERROR_DATA',
    payload
  }
}

export const signUpErrorData = payload => {
  return {
    type: 'SIGNUP_ERROR_DATA',
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

      if (response) {
        const { email, uid } = response.user
        const username = payload.username

        // todo: write user data on verify email
        await firebase.writeUserData({ uid, email, username, imageUrl: null })
        dispatch(signInSuccess({ success: true }))
        dispatch(setUserData({ email, uid, username }))
        dispatch(signInErrorData({ code: null, name: null }))
      }
    } catch (e) {
      const { code, name } = e
      dispatch(signInSuccess({ success: false }))
      dispatch(signInErrorData({ code, name }))
    }
  }
}

export const fetchSignInWithEmailAndPassword = payload => {
  return async function (dispatch) {
    const response = await firebase.signInWithEmailAndPassword(payload)

    if (response.error) {
      const { code, message } = response.error
      dispatch(signUpErrorData({ code, message }))
    }

    if (!response.error) {
      const { email, uid } = response.user
      dispatch(signUpErrorData({ code: null, message: null }))
      dispatch(setUserData({ email, uid, username: null }))
    }
  }
}
