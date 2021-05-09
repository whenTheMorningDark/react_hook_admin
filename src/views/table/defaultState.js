import { Button } from 'antd';
export const dataSource = [
  {
    key: '1',
    name: '胡彦斌123',
    age: 32,
    address: '西湖区湖底公园2221号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];
export const  columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align:"center"
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align:"center"
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    align:"center"
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Button size="small" onClick={this.handleDelete(record)}>删除</Button>
    ),
    align:"center"
  }
];
// const handleDelete = (row)=>{
//   console.log(row)
//   console.log(this)
// }
