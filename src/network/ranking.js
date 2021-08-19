import {request} from "./request"

export function getRankingMultidata(){
  return request({
    url: '/app/getTopAttentionApp'
  })
}
