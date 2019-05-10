import fakeData from 'resources/fakeData'
import { GET_INFO, CREATE_THREAD, CREATE_POST, HIDE_NAVIGATION, SHOW_MODAL } from './consts'

const initialState = {
  boardsList: fakeData,
  navigationOpen: false,
  bigImage: null
}

const boards = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO: {
      return state
    }

    case CREATE_THREAD: {
      const { post, files, boardId } = action.payload
      const boardsList = state.boardsList.map(board => {
        if (board.id === boardId) {
          const postsLength = board.postsLength + 1
          const threads = board.threads
            .map(thread => thread)
            .concat({
              id: board.postsLength,
              posts: [{
                id: board.postsLength,
                text: post,
                files
              }]
            })
          return { ...board, postsLength, threads }
        }
        return board
      })
      return { ...state, boardsList }
    }

    case CREATE_POST: {
      const { post, files, boardId, threadId } = action.payload
      const boardsList = state.boardsList.map(board => {
        if (board.id === boardId) {
          const postsLength = board.postsLength + 1
          const threads = board.threads.map(thread => {
            if (thread.id === threadId) {
              const posts = thread.posts
                .map(post => post)
                .concat({
                  id: board.postsLength,
                  text: post,
                  files
                })
              return { ...thread, posts }
            }
            return thread
          })
          return { ...board, postsLength, threads }
        }
        return board
      })
      return { ...state, boardsList }
    }

    case HIDE_NAVIGATION: {
      const navigationOpen = !state.navigationOpen
      return { ...state, navigationOpen }
    }

    case SHOW_MODAL: {
      const { image } = action.payload
      return { ...state, bigImage: image }
    }

    default:
      return state
  }
}

export default boards
