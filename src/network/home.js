import {request} from "./request"

export function getHomeMultidata(){
  return request({
    url: '/app/qryAppList'
  })
}
export function getHotList(){
  return request({
    url: '/app/getTopViewsAPP'
  })
}
