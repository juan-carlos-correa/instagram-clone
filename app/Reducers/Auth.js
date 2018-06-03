const initialState = {
  signInSuccess: false,
  error: {
    code: null,
    name: null
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return { ...state, signInSuccess: action.payload.success }
    case 'SIGNIN_ERROR_DATA':
      return { ...state, error: { code: action.payload.code, name: action.payload.name } }
    default:
      return state
  }
}

export default authReducer
