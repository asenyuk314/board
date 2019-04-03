import { GET_INFO, CREATE_THREAD, SEND_POST } from './consts'

const initialState = {
  boardsList: []
}

const boards = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO:
      const { boardsList } = action.payload
      return { ...state, boardsList }

    case CREATE_THREAD:
      return state

    case SEND_POST:
      return state

    default:
      return state
  }
}

export default boards
