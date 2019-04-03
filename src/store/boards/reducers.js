import { GET_INFO, CREATE_THREAD, CREATE_POST } from './consts'

const initialState = {
  boardsList: []
}

const boards = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO: {
      const { boardsList } = action.payload
      return { ...state, boardsList }
    }

    case CREATE_THREAD: {
      const { post, boardId } = action.payload
      const boardsList = state.boardsList.map(board => {
        if (board.id === boardId) {
          const postsLength = board.postsLength + 1
          const threads = board.threads
            .map(thread => thread)
            .concat({
              id: board.postsLength,
              posts: [{
                id: board.postsLength,
                text: post
              }]
            })
          return { ...board, postsLength, threads }
        }
        return board
      })
      return { ...state, boardsList }
    }

    case CREATE_POST: {
      const { post, boardId, threadId } = action.payload
      const boardsList = state.boardsList.map(board => {
        if (board.id === boardId) {
          const postsLength = board.postsLength + 1
          const threads = board.threads.map(thread => {
            if (thread.id === threadId) {
              const posts = thread.posts
                .map(post => post)
                .concat({
                  id: board.postsLength,
                  text: post
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

    default:
      return state
  }
}

export default boards
