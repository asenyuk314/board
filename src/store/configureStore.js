import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { load, save } from 'redux-localstorage-simple'

import rootReducer from './rootReducer'

const store = createStore(
  rootReducer,
  load({ states: ['boards'] }),
  composeWithDevTools(
    applyMiddleware(
      thunk,
      save({ states: ['boards'] })
    )
  )
)

export default store
