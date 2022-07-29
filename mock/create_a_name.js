import mockjs from "mockjs";
// mock一个tableData数据包
let testData = mockjs.mock({
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
  '/test': testData,
  // 支持自定义函数 API参考express@4
  // 自定义返回数据包
  'POST /1.1/login': (req,res)=>{
    let user = {
      username:'admin',
      password:'admin'
    }
    console.log(req.body);
    if(req.body.username===user.username&&req.body.password===user.password){
      res.send({
        "sessionToken":"qmdj8pdidnmyzp0c7yqil91oc",
        "updatedAt":"2015-07-14T02:31:50.100Z",
        "phone":"18612340000",
        "objectId":"55a47496e4b05001a7732c5f",
        "username":"tom",
        "createdAt":"2015-07-14T02:31:50.100Z",
        "emailVerified":false,
        "mobilePhoneVerified":false
      });
    }else{
      res.send({msg: '登录名或密码错误'});
    }
  },
}