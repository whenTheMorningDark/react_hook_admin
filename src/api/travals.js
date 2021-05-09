import request from "../utils/request"
// 获取民宿列表
export function getHotDataList(params) {
  return request({
    url: '/api/travals/getHotList',
    method: 'get',
    params
  })
}

// 新增民宿列表数据
export function addHotList(data) {
  return request({
    url: '/api/travals/addHotList',
    method: 'post',
    data
  })
}
// 删除民俗数据
export function delHotList(data) {
  return request({
    url: '/api/travals/delHotList',
    method: 'post',
    data
  })
}

export function getAreaMap(params) {
  return request({
    url: '/api/map/mapList',
    method: 'get',
    params
  })
}