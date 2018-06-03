import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './Auth'

const rootReducer = combineReducers({
  form: formReducer,
  authReducer
})

export default rootReducer
