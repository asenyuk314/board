import { GET_INFO, CREATE_THREAD, CREATE_POST } from './consts'

export const getInfo = () => ({
  type: GET_INFO,
  payload: {
    boardsList: fakeData
  }
})

export const createThread = (post, boardId) => ({
  type: CREATE_THREAD,
  payload: {
    post,
    boardId
  }
})

export const createPost = (post, boardId, threadId) => ({
  type: CREATE_POST,
  payload: {
    post,
    boardId,
    threadId
  }
})

const fakeData = [
  {
    id: 'a',
    name: 'Аниме',
    threads: [
      {
        id: 0,
        posts: [
        {
          id: 0,
          text: 'Подскажите аниме'
        },
        {
          id: 1,
          text: 'Боку но пико'
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
            text: 'Тян не нужны!'
          }
        ]
      },
      {
        id: 1,
        posts: [
          {
            id: 1,
            text: 'Господи, как же хочется тяночку!'
          },
          {
            id: 2,
            text: 'Разве я многого прошу?'
          }
        ]
      }
    ],
    postsLength: 3
  }
]
