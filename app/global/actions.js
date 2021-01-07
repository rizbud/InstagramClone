import api from '../services/api'

export const getStories = (e) => {
  return async (dispatch) => {
    dispatch({
      type: 'GET_STORIES_REQUEST',
    })
    api.getStories()
      .then(response => dispatch({
        type: 'GET_STORIES_SUCCESS',
        response
      }))
  }
}