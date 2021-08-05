import axios from 'axios'
import { ElNotification } from 'element-plus'

const instance = axios.create({
  baseURL: (import.meta.env.VITE_BASE_URL as string) || '/',
  timeout: 15000,
})

instance.interceptors.request.use(
  config => {
    // 请求阶段的配置可以在此注入，如 token
    // config.headers['Authorization'] = 'Bearer xxx'

    if (config.method === 'POST') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
  },
  err => {
    return Promise.reject(err)
  },
)

instance.interceptors.response.use(
  response => {
    // todo: 想根据业务需要，对响应结果预先处理的，都放在这里

    if (response.data.code !== 200) {
      ElNotification({
        title: 'Bad Request',
        message: response.data.message,
        duration: 5,
      })
    }
    return response.data
  },
  err => {
    if (err.response) {
      // 响应错误码处理
      switch (err.response.status) {
        case '403':
          // todo: handler server forbidden error
          break
        // todo: handler other status code
        default:
          err = Error('Unkown error')
          break
      }

      // ElNotification({
      //   title: 'Bad Request',
      //   message: err.error.message,
      //   duration: 5,
      // })

      return Promise.reject(err.response)
    }

    return Promise.reject(err)
  },
)

export default instance
