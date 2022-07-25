import {request} from 'umi'

export const tableGet = () => {
  return request('/table',{
    method: 'GET'
  })
}

export const tableDel = (id) => {
  return request(`/table?id=${id}`,{
    method: 'DELETE'
  })
}