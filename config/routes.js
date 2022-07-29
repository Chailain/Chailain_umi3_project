export default [
  {
    path: '/user/login',
    component: '@/pages/User/Login/index',
    name: '登录',
    hideInMenu: true,
    layout:false
  },
  { 
    path: '/',
    component: '@/pages/index.jsx',
    name: '首页',
    icon: 'HomeOutlined'
  },
  { 
    path: '/goods',
    component: '@/pages/Goods/Pub.jsx',
    name: '商品发布',
    icon: 'EditOutlined'
  },
]