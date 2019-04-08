import { GET_INFO, CREATE_THREAD, CREATE_POST, HIDE_NAVIGATION } from './consts'

export const getInfo = () => ({
  type: GET_INFO
})

export const createThread = (post, files, boardId) => ({
  type: CREATE_THREAD,
  payload: {
    post,
    files,
    boardId
  }
})

export const createPost = (post, files, boardId, threadId) => ({
  type: CREATE_POST,
  payload: {
    post,
    files,
    boardId,
    threadId
  }
})

export const hideNavigation = () => ({
  type: HIDE_NAVIGATION
})
