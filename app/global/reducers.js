import { combineReducers } from 'redux'

// Initial States
const stories = {
  data: null,
  loading: false,
  error: null
}

const posts = {
  data: null,
  loading: false,
  error: null
}

// Reducers
const storiesReducer = (state = stories, action) => {
  switch (action.type) {
    case 'GET_STORIES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'GET_STORIES_SUCCESS':
      return {
        data: action.response.data,
        loading: false,
        error: null
      }
    case 'GET_STORIES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.err
      }
    default: 
      return state
  }
}

const postsReducer = (state = posts, action) => {
  switch (action.type) {
    // Get Posts
    case 'GET_POSTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      }
    case  'GET_POSTS_SUCCESS':
      return {
        data: action.response.data,
        loading: false,
        error: null,
      }
    case 'GET_POSTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.err
      }

    // Like Post
    case 'LIKE_POST_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      }
    case  'LIKE_POST_SUCCESS':
      console.log(action.response.data)
      return {
        data: action.response.data,
        loading: false,
        error: null,
      }
    case 'LIKE_POST_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.err
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  stories: storiesReducer,
  posts: postsReducer
})

export default reducers