import {request} from "@/network/request";
export function upload_comment( content,score,app_id,user_id) {
  return request({
    url: '/app/addComment',
    params: {
      'content': content,
      'score': score,
      'app_id': app_id,
      'user_id': user_id,
    }
  })
}

export function ifguanzu_judge(app_id,user_id) {
  return request({
    url: '/atten/checkAttention',
    params: {
      'app_id': app_id,
      'user_id': user_id,
    }
  })
}

export function buguanzu_do(app_id,user_id) {
  return request({
    url: '/atten/delAttention',
    params: {
      'app_id': app_id,
      'user_id': user_id,
    }
  })
}

export function guanzu_do(app_id,user_id) {
  return request({
    url: '/atten/addAttention',
    params: {
      'app_id': app_id,
      'user_id': user_id,
    }
  })
}
