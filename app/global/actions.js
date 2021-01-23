import api from '../services/api'

export const getStories = () => {
  return (dispatch) => {
    dispatch({
      type: 'GET_STORIES_REQUEST',
    })
    api.getStories()
      .then(response => dispatch({
        type: 'GET_STORIES_SUCCESS',
        response
      }))
      .catch(err => dispatch({
        type: 'GET_STORIES_FAILURE',
        err
      }))
  }
}

export const getPosts = () => {
  return (dispatch) => {
    dispatch({
      type: 'GET_POSTS_REQUEST',
    })
    api.getPosts()
      .then(response => dispatch({
        type: 'GET_POSTS_SUCCESS',
        response
      }))
      .catch(err => dispatch({
        type: 'GET_POSTS_FAILURE',
        err
      }))
  }
}

export const likePost = (e) => {
  return (dispatch) => {
    dispatch({
      type: 'LIKE_POST_REQUEST',
    })
    api.likePost(e)
      .then(response => dispatch({
        type: 'LIKE_POST_SUCCESS',
        response
      }))
      .catch(err => dispatch({
        type: 'LIKE_POST_FAILURE',
        err
      }))
  }
}