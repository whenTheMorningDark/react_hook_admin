import React from "react"
import { message } from 'antd';
import "./index.css"
import {getHotDataList,getAreaMap,addHotList,delHotList} from "@/api/travals"
// import * as dayjs from 'dayjs'
// import {columns} from "./data/tableData"
import AnTdTableForm from "@/components/AnTdTableForm"
export default class Hotel extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      columns: [
        {
          title: '图片来源',
          dataIndex: 'img',
          key: 'img',
          align:"center",
          type:"input",
          typeConfig:{
            placeholder:"请输入图片来源",
            allowClear:true,
            rules:[{ required: true, message: '图片来源不能为空!' }]
          }
        },
        {
          title: '标题',
          dataIndex: 'title',
          key: 'title',
          align:"center",
          type:"input",
          typeConfig:{
            placeholder:"请输入标题",
            rules:[{ required: true, message: '标题不能为空!' }]
          }
        },
        {
          title: '信息',
          dataIndex: 'info',
          key: 'info',
          align:"center",
          type:"input",
          typeConfig:{
            placeholder:"请输入信息",
            rules:[{ required: true, message: '信息不能为空!' }]
          }
        },
        {
          title: '价格',
          dataIndex: 'price',
          key: 'price',
          align:"center",
          type:"input",
          typeConfig:{
            placeholder:"请输入价格",
            rules:[{ required: true, message: '价格不能为空!' }]
          }
        },
        {
          title: '地点',
          key: 'areaValue',
          dataIndex: 'areaValue',
          render: tags => (
            <>
              {this.changeLabel(tags)}
            </>
          ),
        },
      ],
      config:{
        title: '提示',
        btnTxt: ['关闭', '提交'],
        width: '650px',
        bodyStyle:{
          padding:"10px",
        },
        autoClose:false,
        keyboard:false,
        maskClosable:false
      },
      tableConfig:{
        bordered:true,
        rowKey:"id"
      },
      data:[],
      optionsData:[],
      pagination: {
        current: 1,
        pageSize: 10
      }
    }
  }
  // 新增民宿列表数据
   addTable = async (data)=>{
    console.log(data)
    const {values} = data
    // value.createdAt = dayjs(value.createdAt).format('YYYY-MM-DD HH:mm:ss');  
    let resData = await addHotList(values)
    if(resData.code === 0){
      message.success({
        content:"新增成功!"
      })
      this.getTableData()
    } else {
      message.info({
        content:"新增失败!"
      })
    }
    console.log(resData)
  }
  // 删除民宿列表
  delFun = async (data)=>{
    let resData = await delHotList({id:data.id})
    console.log(resData)
    if(resData.data){
      message.success({
        content:"删除成功!"
      })
    }
  }
  // 分页切换
  handleTableChange = async (data)=>{
    console.log(data)
    let res = await getHotDataList(data)
    console.log(res)
    let tableData = res.data.data
    this.setState({
      data:tableData
    })
    console.log(this.state.data)
    this.setState({
      pagination:{
        ...this.state.pagination,
        ...data
      }
    })
  }

  changeLabel = (value)=>{
    // eslint-disable-next-line eqeqeq
    if(value == undefined){
      return ""
    }
    let target = this.state.optionsData.find(v=>v.value === value) || {}
    return target.label || ''
  }
  // 获取表格数据
  async getTableData(){
    let params = this.state.pagination
    let res = await getHotDataList(params)
    console.log(res)
    let resOptionsData = await getAreaMap({type:"mapArea"})
    let tableData = res.data.data
    let optionsData = resOptionsData.data

    
    this.setState({
      data:[...this.state.data,...tableData]
    })
    console.log(this.state.data)

    this.setState({
      pagination:{
        ...this.state.pagination,
        total:res.data.total
      }
    })

    this.setState({
      optionsData:[...this.state.optionsData,...optionsData]
    })
  }
  async componentDidMount(){
    this.getTableData()
  }
  render(){
    return (
      <div className="hotelList">
        {
          this.state.optionsData.length>0?<AnTdTableForm
          columns={this.state.columns}
          dataSource={this.state.data}
          tableConfig={this.state.tableConfig}
          dialogConfig={this.state.config}
          pagination={this.state.pagination}
          addTable={this.addTable}
          handleTableChange = {this.handleTableChange}
          delFun={this.delFun}
        />:null
        }
        
      </div>
    )
  }
}