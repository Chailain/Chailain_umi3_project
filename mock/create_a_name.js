import mockjs from "mockjs";
// mock一个tableData数据包
let tableData = mockjs.mock({
  code: 200,
  msg: "表格数据加载成功",
  'data|15': [
    {
      // key: '@id',
      'objectId|+1': 1,
      name: "@cname",
      city: "@city"
    }
  ]
})
export default {
  // GET 可忽略
  // 支持值为 Object 和 Array
  // 'GET /api/users1': [1, 2],
  // 直接返回数据包
  '/table': tableData,
  // 支持自定义函数 API参考express@4
  // 自定义返回数据包
  'DELETE /table': (req,res)=>{
    let {id} = req.query;
    let {data} = tableData;
    for(let i=0;i<data.length;i++){
      if(data[i] === id){
        data.splice(i,1)
        res.send({
          code: 200,
          msg: '删除成功'
        })
        return
      }
    }
    res.send({
      code: 100,
      msg: '找不到对应的数据'
    })
  },
}