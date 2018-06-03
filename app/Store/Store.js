import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../Reducers'
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
)

store.subscribe(() => {
  console.log('new state', store.getState().auth)
})

console.log('initial state', store.getState())

export default store
