// 约定 src/app.js 为运行时配置
// ①文档，运行时配置  ②插件，不同Plugins，运行时配置
export const request = {
  requestInterceptors:[
    (url, options)=>{
      return options
    }
  ],
  responseInterceptors:[
    (response,options)=>{
      return response
    }
  ]
}