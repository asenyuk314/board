import { GET_INFO, CREATE_THREAD, CREATE_POST, HIDE_NAVIGATION } from './consts'

export const getInfo = () => ({
  type: GET_INFO
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

export const hideNavigation = () => ({
  type: HIDE_NAVIGATION
})
