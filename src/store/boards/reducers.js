import { GET_INFO, CREATE_THREAD, CREATE_POST, HIDE_NAVIGATION } from './consts'

const initialState = {
  boardsList: [
    {
      id: 'a',
      name: 'Аниме',
      threads: [
        {
          id: 0,
          posts: [
          {
            id: 0,
            text: 'Подскажите аниме',
            files: []
          },
          {
            id: 1,
            text: 'Боку но пико',
            files: []
          }
        ]
        }
      ],
      postsLength: 2
    },
    {
      id: 'b',
      name: 'Бред',
      threads: [
        {
          id: 0,
          posts: [
            {
              id: 0,
              text: 'Тян не нужны!',
              files: []
            }
          ]
        },
        {
          id: 1,
          posts: [
            {
              id: 1,
              text: 'Господи, как же хочется тяночку!',
              files: []
            },
            {
              id: 2,
              text: 'Разве я многого прошу?',
              files: []
            }
          ]
        }
      ],
      postsLength: 3
    }
  ],
  navigationOpen: true
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

    default:
      return state
  }
}

export default boards
