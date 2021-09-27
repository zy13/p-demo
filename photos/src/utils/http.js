import axios from 'axios'
import store from '../store'
import router from '../router'

const htpp = axios.create({
  baseURL: '/api'
})

// 请求拦截
htpp.interceptors.request.use(config => {
  const { token } = store.state
  if (token) {
    config.headers.authorization = 'Bearer ' + token
  } else {
    router.replace({
      name: 'Login'
    })
  }
  return config
})

htpp.interceptors.response.use(response => {
  return response
})

export default htpp
