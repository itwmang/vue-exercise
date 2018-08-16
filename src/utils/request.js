import axios from 'axios'
import {Loading} from 'element-ui'
import msg from './message'

/** axios 全局配置 */
const axiosConfig = axios.create({
  baseURL: '/api', // api的base_url
  timeout: 30000
  // responseType: 'json'
})
let reqLoading = null
axiosConfig.interceptors.request.use(config => {
  // 修改头部请求
  // if (store.token) {
  //   config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  // }
  reqLoading = Loading.service({
    fullscreen: false,
    // spinner: 'el-icon-loading',
    text: '拼命加载中...',
    target: 'main'
  })
  return config
}, error => {
  setTimeout(function () { reqLoading.close() }, 200)
  msg.message('请求发送失败', 'error')
  console.error(error)
  Promise.request(error)
})

axiosConfig.interceptors.response.use(
  response => {
    const res = response.data
    setTimeout(function () { reqLoading.close() }, 200)
    if (res.state === false) {
      msg.message(res.msg, 'error')
      return Promise.reject(res)
    }
    return res.result
  }, error => {
    setTimeout(function () { reqLoading.close() }, 1000)
    const res = error.response
    console.error(res.status)
    if (res.status === 400) {
      msg.message(`${res.status}:res.msg`, 'error')
    } else if (res.status === 404) {
      msg.message('请求数据失败:没有找到对应的请求', 'error')
      this.$router.push({ path: '/' })
    } else {
      msg.message('请求数据失败', 'error')
    }
    return Promise.reject(error)
  })

export default axiosConfig
