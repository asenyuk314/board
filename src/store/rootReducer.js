import { combineReducers } from 'redux'

import boards from './boards/reducers'

const rootReducer = combineReducers({
  boards
})

export default rootReducer
