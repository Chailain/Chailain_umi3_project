import { Button, Checkbox, Form, Input, Card, Row, Col, Spin } from 'antd';
import {useEffect,useState} from 'react';
import { useModel, history, useRequest } from 'umi';
import { userLogin } from '@/services_api/user'
const Login = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  let [rememberPwd, setRememberPwd] = useState(false)
  let { data, error, loading, run } = useRequest(userLogin, {
    manual: true
  })

  const onFinish = (values) => {
    run(values)
    setRememberPwd(values.remember)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(()=>{
    if(data){
      // 记住密码
      if(rememberPwd){
        localStorage.setItem('userInfo',JSON.stringify(data))
      }else{
        sessionStorage.setItem('userInfo',JSON.stringify(data))
      }
      setInitialState({
        isLogin:true,
        userInfo:data
      })
      setTimeout(()=>{
        history.push('/')
      },1000)
    }
  },[data])

  let initialLoginValues = {
    username: 'admin',
    password: 'admin',
    remember: rememberPwd
  }

  return (
    <Row align="middle" style={{height:'100vh'}}>
      <Col span={8} offset={8}>
        <Spin spinning={loading}>
          <Card
            title="请登录"
            extra={<a href="#">去注册</a>}
          >
            <Form
              name="basic"
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 20,
              }}
              initialValues={initialLoginValues}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="账号"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>记住密码</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Spin>
      </Col>
    </Row>
  );
};

export default Login;