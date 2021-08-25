import {request} from './request'

export function checkEmailFormat(email){
  return request({
    url: '/user/checkEmail',
    params: {
      'email': email
    }
  });
}

export function register(username, password, email, phone){
  return request({
    url: '/user/register',
    params: {
      'username': username,
      'password': password,
      'email': email,
      'phone_no': phone,
    }
  })

}
