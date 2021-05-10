import React,{useRef,useState,useEffect} from "react"
import ATable from "./ATable"
import AnTdDialog from "@/components/AnTdDialog"
import {Button} from "antd"
import { PlusOutlined } from '@ant-design/icons';
import AForm from "./AForm"
export default function AnTdTableForm(props){
  const {columns,tableConfig,dialogConfig,pagination,dataSource} = props
  const childRef = useRef();
  const formRef = useRef();
  
  // 删除功能
  const delFun = (data)=>{
    props.delFun(data)
  }
  // 设置初始表头的数据
  const getColumnMap = ()=>{
    return columns.reduce((cur,next)=>{
      if(!cur[next.key]){
        cur[next.key] = ""
      }
      return cur
    },{})
  }

  const initialFormState = getColumnMap()
  const [ users, setUsers ] = useState(dataSource)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)

  const [ cDialogConfig, setCdialogConfig ] = useState(dialogConfig)
  // 添加功能
  const handleAdd = ()=>{
    setCurrentUser(getColumnMap())
    setCdialogConfig({...cDialogConfig,title:"新增民宿"})
    childRef.current.open(async cancel => {
      let data = await formRef.current.valaditor()
      if(data.status){
        cancel()
        props.addTable(data)
      }
    });
  }
  useEffect(() => {
    setUsers(dataSource)
    console.log(dataSource,"---------------")

  }, [dataSource])


  const editFun = (user)=>{
    setCurrentUser(user)
    setCdialogConfig({...cDialogConfig,title:"编辑民宿"})
    childRef.current.open(async cancel => {
      let data = await formRef.current.valaditor()
      if(data.status){
        cancel()
        console.log(data.values)
        let targetUser = {...user,...data.values}
        props.upDateRow(targetUser)
      }
    });
  }
  const updateUser = (id, updatedUser) => {
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}
  return(
    <>
    <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }} icon={<PlusOutlined />}>
        添加数据
    </Button>
    <div className="AnTdTableForm">
      <ATable
        columns={columns}
        dataSource={users}
        tableConfig={tableConfig}
        dialogConfig={dialogConfig}
        pagination={pagination}
        handleTableChange={props.handleTableChange}
        editFun={editFun}
        delFun={delFun}
      />
    </div>
              
    <AnTdDialog
        {...cDialogConfig}
        cRef={childRef}
      >
        <AForm 
          formConfig={columns}
          cRef={formRef}
          currentUser={currentUser}
          updateUser={updateUser}
        />
    </AnTdDialog>
    </>
  )
}