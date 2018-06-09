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
    console.log('login', response)
    if (response.error) {
      const { code, message } = response.error
      dispatch(signUpErrorData({ code, message }))
    }

    if (!response.error) {
      dispatch(signUpErrorData({ code: null, message: null }))
      dispatch(setUserData(response))
    }
  }
}

export const checkAuthState = () => {
  return async function (dispatch) {
    try {
      const user = await firebase.authState()

      if (user) {
        dispatch(setUserData(user))
      } else {
        dispatch(setUserData(null))
      }
    } catch (e) {
      dispatch(setUserData(null))
    }
  }
}

export const signOut = () => {
  return async function (dispatch) {
    try {
      const response = await firebase.signOut()

      if (response) {
        dispatch(setUserData(null))
      }
    } catch (e) {
      console.log('Error on signOut')
    }
  }
}
