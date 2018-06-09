const initialState = {
  signInSuccess: false,
  error: {
    signin: {
      code: null,
      name: null
    },
    signup: {
      code: null,
      name: null
    }
  },
  user: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return { ...state, signInSuccess: action.payload.success }
    case 'SIGNIN_ERROR_DATA':
      return {
        ...state,
        error: {
          signin: {
            code: action.payload.code,
            name: action.payload.name
          }
        }
      }
    case 'SIGNUP_ERROR_DATA':
      return {
        ...state,
        error: {
          signup: {
            code: action.payload.code,
            name: action.payload.name
          }
        }
      }
    case 'SET_USER_DATA':
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export default authReducer
