// const axios = require('axios')
import axios from 'axios'

function api(){
  const axiosInstance = axios.create({
     baseURL: `http://localhost:3001/`
  })

  //每个axios请求带上token(存在的话)
  const token = localStorage.getItem('token')
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token')
      }
      return Promise.reject(error)
    }
  )
  return axiosInstance
}


export default api