import React from 'react'
import { SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space, Tooltip } from 'antd';
import { useModel, history } from 'umi';

export default () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  const handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };
  
  const handleMenuClick = ({key}) => {
    if(key === '2'){
      setInitialState({
        isLogin:false,
        userInfo:null
      })
      localStorage.removeItem('userInfo')
      sessionStorage.removeItem('userInfo')
      history.push('/user/login')
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: '个人设置',
          key: '1',
          icon: <SettingOutlined />,
        },
        {
          label: '退出登录',
          key: '2',
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );
  
  return (
    <Space wrap>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        Dropdown
      </Dropdown.Button>
    </Space>
  )
}
