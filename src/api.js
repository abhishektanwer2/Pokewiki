import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.URL,
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'X-Custom-Header': 'foobar'
  }
})

export default instance