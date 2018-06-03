import { createStore, combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

const testReducer = (state = {}) => state

const reducers = combineReducers({
  testReducer,
  form
})

const store = createStore(reducers)

export default store
