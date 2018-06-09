import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './Auth'
import imageSignUpReducer from './ImageSignUp'

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  imageSignUp: imageSignUpReducer
})

export default rootReducer
