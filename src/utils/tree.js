export function findTreeNode(data,key="id",targetData){
  let result = {}
  let stack = JSON.parse(JSON.stringify(data))
  while(stack.length){
    let node = stack.shift()
    if(node[key] === targetData){
      result = node
      break
    }
    if(node.children && node.children.length>0){
      stack = [...stack,...node.children]
    }
  }
  return result
}

export function findParentNode(arr1,id){
  let temp = []
  let forFn = function (arr, id) {
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
          if (item.id === id) {
            temp.push(item)
            forFn(arr1, item.pId)
            break
          } else {
            if (item.children) {
              forFn(item.children, id)
            }
          }
        }
      }
    forFn(arr1, id)
  return temp.length>1?temp[temp.length-1]:{}
}