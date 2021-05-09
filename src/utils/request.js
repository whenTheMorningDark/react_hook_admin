import axios from 'axios'


// import {
//   getCookies
// } from '@/utils/user'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers.Authorization = `Bearer ${getToken('Token-kafei')}`
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.errno !== 0) {
      // Message({
      //   message: res.message || 'Error',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      // store.dispatch('user/setBaseInfo', {})
    }
    return res
  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   message: '网络错误!',
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    // store.dispatch('user/setBaseInfo', {})
    return Promise.reject(error)
  }
)

export default service