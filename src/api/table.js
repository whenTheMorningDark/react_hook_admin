import request from "../utils/request"

export function getData() {
  return request({
    url: 'http://localhost:3000/api/blog/map',
    method: 'get'
  })
}