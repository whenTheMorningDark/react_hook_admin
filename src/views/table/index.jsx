import React,{ useEffect, useState } from 'react';
import { Table,Button } from "antd"
// import { dataSource } from "./defaultState"
import {getData} from "../../api/table"
import "./index.css"
const { Column } = Table;
export default function MyTable(){
  const [defaultDataSource,setDefaultDataSource] = useState([])
  
  useEffect(()=>{
    const fetchData = async ()=>{
      const result = await getData()
      console.log(result)
    }
    fetchData()
  },[])
  // const columns = [
  //   {
  //     title: '姓名',
  //     dataIndex: 'name',
  //     key: 'name',
  //     align:"center"
  //   },
  //   {
  //     title: '年龄',
  //     dataIndex: 'age',
  //     key: 'age',
  //     align:"center"
  //   },
  //   {
  //     title: '住址',
  //     dataIndex: 'address',
  //     key: 'address',
  //     align:"center"
  //   },
  //   {
  //     title: 'Action',
  //     key: 'action',
  //     render: (text, record) => (
  //       <Button size="small" onClick={handleDelete.bind(this,record)}>删除</Button>
  //     ),
  //     align:"center"
  //   }
  // ];
  // const handleDelete = (row)=>{
  //   let newData = defaultDataSource.filter(v=>v.key !==row.key)
  //   setDefaultDataSource(newData)
  // }
  
  
  return (
    <div className="tableWrapper">
      <Button type="primary">修改数据</Button>
      <Table dataSource={defaultDataSource} bordered>
        {/* {
          columns.map(v=>{
            return <Column 
            title={v.title} 
            key={v.key} 
            render={v.render}
            dataIndex={v.dataIndex}
            />
          })
        } */}
      </Table>
    </div>
  )
}