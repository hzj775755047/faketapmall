import axios from 'axios'


export function request(config){
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://120.77.215.233:8080',
  });

  // 2.axios的拦截器
  // 2.2响应拦截
  instance.interceptors.response.use(res =>{
    return res.data.data;
  }, err =>{
  })
  // 3.发送真正的网络请求
  return instance(config);
}

