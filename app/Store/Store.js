import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../Reducers'
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
)

store.subscribe(() => {
  console.log('new state', store.getState().authReducer)
})

console.log('initial state', store.getState().authReducer)

export default store
