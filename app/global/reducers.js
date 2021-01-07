import { combineReducers } from 'redux'

const stories = {
  data: null,
  loading: false,
}

const storiesReducer = (state = stories, action) => {
  switch (action.type) {
    case 'GET_STORIES_REQUEST':
      return {
        data: null,
        loading: true
      }
    case 'GET_STORIES_SUCCESS':
      return {
        data: action.response,
        loading: false
      }
    default: 
      return { ...state }
  }
}

const reducers = combineReducers({
  stories: storiesReducer
})

export default reducers