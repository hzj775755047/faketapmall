import axios from 'axios'
export function request(config){
  const instance = axios.create({
    baseURL: 'http://8.134.217.191:8090'
  });
  return instance(config);
}

export const urlPre = "http://8.134.217.191:8090/img/"
