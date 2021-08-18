import axios from 'axios'
import { ElNotification } from 'element-plus'
import i18n from '../i18n'
import store from '../stores'

const CancelToken = axios.CancelToken

const instance = axios.create({
  baseURL: import.meta.env.DEV ? import.meta.env.VITE_REQUEST_PREFIX + '' : '/',
  timeout: 10000,
})

instance.interceptors.request.use(
  config => {
    // 请求阶段的配置可以在此注入，如 token
    // config.headers['Authorization'] = 'Bearer xxx'

    config.cancelToken = new CancelToken(c => {
      store.commit('xhr/inject', c)
    })

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
    if (response.data.code !== 0) {
      ElNotification({
        type: 'error',
        title: response.data.code,
        message: response.data.msg,
      })
    }

    return response.data.data
  },
  err => {
    if (err.message?.includes('timeout')) {
      ElNotification({
        type: 'error',
        title: i18n.global.t('timeout'),
        message: i18n.global.t('timeout_message'),
        duration: 5000,
      })
    }

    if (err.response) {
      ElNotification({
        type: 'error',
        title: err.response.status,
        message: err.response.statusText,
        duration: 5000,
      })
    }

    return Promise.reject(err)
  },
)

export const request = instance
