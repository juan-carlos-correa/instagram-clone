const initialState = {
  image: null
}

const imageSignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAR_IMAGE':
      return { ...state, image: null }
    case 'LOAD_IMAGE_SIGNUP':
      return { ...state, image: action.payload }
    default:
      return state
  }
}

export default imageSignUpReducer
