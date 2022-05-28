import axios from 'axios'
export function request(config){
  const instance = axios.create({
    baseURL: 'http://localhost:8090'
  });
  return instance(config);
}

export const urlPre = "http://localhost:8090/img/"
