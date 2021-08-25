import {request} from './request'
export function login( password, email) {
  return request({
    url: '/user/passwordLogin',
    params: {
      'email': email,
      'password': password,
    }
  })
}
