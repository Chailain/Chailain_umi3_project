import {request} from 'umi'

export const userLogin = data => {
  return request('/login',{
    method: 'POST',
    data
  })
}