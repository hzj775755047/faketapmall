import {request} from "./request"

export function getCategories(){
  return request({
    url: '/app/qryAppClass',
  })
}

export function getCategoryDataById(id){
  return request({
    url: '/app/qryByClassId',
    params: {
      'app_class_id': id,
    }
  })
}
