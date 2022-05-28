import {request} from "./request";

export async function qryAppList(){
  return await request({
    url: '/api/qryAppList',
    method: 'get'
  });
}

export async function qryAppListbyNum(num1, num2){
  return await request({
    url: '/api/qryAppListbyNum',
    method: 'get',
    params: {num1, num2}
  });
}

export async function qryAppClass(){
  return await request({
    url: '/api/qryAppClass',
    method: 'get'
  });
}

export async function qryByClassId(app_class_id){
  return await request({
    url: '/api/qryByClassId',
    method: 'get',
    params: {
      app_class_id
    }
  });
}

export async function getTopAttentionApp(){
  return await request({
    url: '/api/getTopAttentionApp',
    method: 'get'
  });
}

export async function getTopAttentionAppbyNum(num1, num2){
  return await request({
    url: '/api/getTopAttentionAppbyNum',
    method: 'get',
    params: {num1, num2}
  });
}

export async function getTopViewsAPP(){
  return await request({
    url: '/api/getTopViewsAPP',
    method: 'get'
  });
}

export async function getClassNamebyId(app_class_id){
  return await request({
    url: '/api/getClassNamebyId',
    method: 'get',
    params: {app_class_id}
  });
}

export async function getApplicationbyId(app_id){
  return await request({
    url: '/api/getApplicationbyId',
    method: 'get',
    params: {app_id}
  });
}

export async function getScreenShotbyId(app_id){
  return await request({
    url: '/api/getScreenShotbyId',
    method: 'get',
    params: {app_id}
  });
}

export async function login(username, password){
  return await request({
    url: '/api/login',
    method: 'get',
    params: {username, password}
  });
}

export async function register(username, password){
  return await request({
    url: '/api/register',
    method: 'get',
    params: {username, password}
  });
}

export async function search(searchStr){
  return await request({
    url: '/api/search',
    method: 'get',
    params: {searchStr}
  })
}

export async function profile(user_id){
  return await request({
    url: '/api/profile',
    method: 'get',
    params: {user_id}
  });
}

export async function updateProfile(user_id, username, password, email, phone_no){
  return await request({
    url: '/api/updateProfile',
    method: 'get',
    params: {user_id, username, password, email, phone_no}
  });
}
