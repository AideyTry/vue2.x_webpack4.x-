import axios from 'axios'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://192.168.4.70:2222/', // api的base_url
  timeout: 60 * 1000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
  }
})

// request拦截器
service.interceptors.request.use(config => {
  if(getToken()){
    config.headers['token'] = getToken() //让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  console.log('request error', error) // for debug
  Promise.reject(error)
})

export default service
