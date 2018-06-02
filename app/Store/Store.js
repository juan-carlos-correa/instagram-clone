import { createStore, combineReducers } from 'redux'

const testReducer = (state = {}, action) => state

const reducers = combineReducers({
  testReducer
})

const store = createStore(reducers)

export default store
