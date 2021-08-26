import axios from 'axios'

export function getcookie(name) {
  let arr = document.cookie.split('; ');//用“;”和空格来划分cookie
  for(let i = 0 ;i < arr.length ; i++){
    let arr2 = arr[i].split("=");
    if(arr2[0] == name){
      return arr2[1];
    }
  }
  return '';
}

export function request(config){
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://120.77.215.233:8080',
  });
  // 2.1.请求拦截器
  instance.interceptors.request.use(config=>{
    //如果token存在，请求携带这个token
    if (getcookie('jwttoken') || window.localStorage.getItem('jwttoken')) {
      config.headers['Authorization'] = getcookie('jwttoken') || window.localStorage.getItem('jwttoken');
    }
    return config;//整个遍历完没找到，就返回空值
  })

  // 2.2响应拦截
  instance.interceptors.response.use(res =>{
    return res.data;
  }, err =>{
  })
  // 3.发送真正的网络请求
  return instance(config);
  // 2.axios的拦截器
  // 2.2响应拦截
  instance.interceptors.response.use(res =>{
    return res.data;
  }, err =>{
  })
  // 3.发送真正的网络请求
  return instance(config);
}

