import { Button } from 'antd';
export const  columns = [
  {
    title: '图片来源',
    dataIndex: 'img',
    key: 'img',
    align:"center"
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    align:"center"
  },
  {
    title: '信息',
    dataIndex: 'info',
    key: 'info',
    align:"center"
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    align:"center"
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
    align:"center"
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Button size="small" onClick={(e)=>{this.delFun(record)}}>删除</Button>
    ),
    align:"center"
  }
];