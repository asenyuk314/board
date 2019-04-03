import { GET_INFO, CREATE_THREAD, SEND_POST } from './consts'

export const getInfo = () => ({
  type: GET_INFO,
  payload: {
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
              text: 'Подскажите аниме'
            },
            {
              id: 1,
              text: 'Боку но пико'
            }
          ]
          }
        ]
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
        ]
      }
    ]
  }
})

export const createThread = () => ({
  type: CREATE_THREAD
})

export const sendPost = () => ({
  type: SEND_POST
})

