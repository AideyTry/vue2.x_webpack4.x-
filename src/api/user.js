import request from '@/utils/fetch'
// 登录
export function userLogin (params) {
  return request({
    url: `user/garage/login`,
    method: 'post',
    data: params
  })
}