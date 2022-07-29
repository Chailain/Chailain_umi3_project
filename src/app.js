import { history } from 'umi';
import { message } from 'antd';
import AvatarDrop from './components/AvatarDrop';
// 约定 src/app.js 为运行时配置
// ①文档，运行时配置  ②插件，不同Plugins，运行时配置

// 请求相关的运行时配置
export const request = {
  requestInterceptors:[
    (url, options)=>{
      options.url = 'http://localhost:8000/1.1' + url
      options.headers = {
        "Content-Type": "application/json",
        "X-LC-Id": "appid",
        "X-LC-Key": "appkey"
      }
      return options
    }
  ],
  responseInterceptors:[
    async(response,options)=>{
      let res = await response.json()
      let method = options.method.toLowerCase()
      if(method === 'post' && res.sessionToken){
        message.success('登录成功')
      }
      let data = {...res}
      return {data}
    }
  ]
}

// 初始化 全局共享变量 初始值   运行时配置
export async function getInitialState() {
  let userState = {
    isLogin:false,
    userInfo:null
  }
  // 试着去 本地存储/会话存储 里面拿 JSON字符串
  let info = localStorage.getItem('userInfo') || sessionStorage.getItem('userInfo')
  // 之前登录过
  if(info){
    // 重写userState
    userState = {
      isLogin:true,
      userInfo:JSON.parse(info)
    }
  }
  // 要么初始值 要么重写值
  return userState;
}

// 自定义控制 布局的展示
export const layout = ({initialState}) => {
  return {
    onPageChange: () => {
      const { isLogin } = initialState;
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!isLogin && location.pathname !== '/user/login') {
        history.push('/user/login');
      }
    },
    rightContentRender: () => {
      return (
        <AvatarDrop />
      )
    }
  }
}