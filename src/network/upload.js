import {request} from './request'

export function uploadPack(formData) {
  return request({
    url: '/upload/package',
    params: {
      'formData': formData,
    },
    headers:{"Content-Type":"multipart/form-data"},
  })
}
export function upload( user_id,
                        app_name,
                        introduce,
                        description,
                        app_class_id,
                        developer_name,
                        website,
                        version,
                        app_size,
                        size_unit,
                        app_icon,
                        app_big_img,
                        download_url,
                        screenshot1,
                        screenshot2,
                        screenshot3) {
  return request({
    url: '/app/postApp',
    params: {
      'user_id':user_id,
      'app_name':app_name,
      'introduce':introduce,
      'description':description,
      'app_class_id':app_class_id,
      'developer_name':developer_name,
      'website':website,
      'version':version,
      'app_size':app_size,
      'size_unit':size_unit,
    'app_icon':app_icon,
    'app_big_img':app_big_img,
    'download_url':download_url,
    'screenshot1':screenshot1,
    'screenshot2':screenshot2,
    'screenshot3':screenshot3
    }
  })
}
