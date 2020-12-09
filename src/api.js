import axios from "axios";

const instance = axios.create({
  "baseURL": process.env.REACT_APP_URL,
  "timeout": 5000,
  "headers": {
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    "X-Custom-Header": "foobar"
  }
});

export default instance;
