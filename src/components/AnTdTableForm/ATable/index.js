import React,{useState,useEffect} from "react"
import {Table} from "antd"
import { Button } from 'antd';
import "./index.css"
export default function ATable(props){
  const {columns,dataSource,tableConfig,pagination} = props
  let [columnsData,setColumnsData] = useState([])
  const editFun = (row)=>{
    props.editFun(row)
  }
  const delFun = (row)=>{
    console.log(row)
    props.delFun(row)
  }
  const handleTableChange = (pagination)=>{
    props.handleTableChange(pagination)
  }
  useEffect(() => {
    let arr = [...columns,...[{
      title: '操作',
      key: 'action',
      width:200,
      render: (text, record) => (
        <>
          <Button size="small" onClick={(e)=>{editFun(record)}} type="primary">编辑</Button>
          <Button size="small" onClick={(e)=>{delFun(record)}}>删除</Button>
        </>
      ),
      align:"center"
    }]]
    setColumnsData(arr)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns])
  
  return (
    
      <Table
          columns={columnsData}
          dataSource={dataSource}
          pagination={pagination}
          {...tableConfig}
          onChange={handleTableChange}
      />
  )
}