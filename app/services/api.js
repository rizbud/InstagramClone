import axios from 'axios'

const baseURL = 'https://api.jsonbin.io/b'
const options = {
  headers: {
    "ContentType": "application/json",
    "secret-key": "$2b$10$dlou2BDVv31brpW.7/c5i.pATxZM7Tp.t5NmcPsW4GMzepyxSumSi"
  },
  timeout: 10000
}

export default api = {
  getStories: () => axios.get(`${baseURL}/5ff6c6c9a6fe5a58cd871382/1`, options),
  getPosts: () => axios.get(`${baseURL}/5ff993225ee7e15f9eaf8838`, options),
  likePost: (data) => axios.put(`${baseURL}/5ff993225ee7e15f9eaf8838`, data, options)
}