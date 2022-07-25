import { Table,Space,Button } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { tableGet, tableDel } from '@/services_api/table_ref'

export default function IndexPage() {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '城市',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record,index) => (
        <Space size="middle">
          <Button type="primary" size="small">编辑</Button>
          <Button type="primary" size="small" danger onClick={()=>{
            tableDel(record.objectId).then(()=>{
              index = index + (currentPage - 1)*10
              data.splice(index,1)
              setData([...data])
            })
          }}>
            删除
          </Button>
        </Space>
      ),
    }
  ];
  let [data,setData] = useState([])
  let [currentPage,setCurrentPage] = useState(1)
  useEffect(()=>{
    tableGet().then(res=>{
      setData(res.data)
    })
  },[])
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="objectId" 
      pagination={{ 
        onChange: (page, pageSize)=>{
          setCurrentPage(page)
        }
      }}
    />
  );
}
