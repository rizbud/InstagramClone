import axios from 'axios'

const baseURL = 'http://jsonplaceholder.typicode.com'
const headers = {
  "ContentType": "application/json"
}

export default api = {
  getStories: () => axios.get(`${baseURL}/photos`, {
    headers,
    timeout: 10000
  }),
  getPosts: () => axios.get(`${baseURL}/posts`, {
    headers,
    timeout: 10000
  })
}