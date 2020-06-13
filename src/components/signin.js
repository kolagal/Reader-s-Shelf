import React, { Component } from 'react';
import {Link } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Loginstyles.css';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';
const Signin = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
      <div class = "loginbox">
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
           <a className = "rememberr">
          <Checkbox>Remember me</Checkbox>
          </a>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a className = "registerr"href="/register.js">Register now!</a>
         {/* Or <a className = "registerr">Back <Link to = {"/register"}>Here</Link></a> */}
         {/* <p className="registerr">
            Or<Link to={"/Register"}>Register Now!</Link>
        </p> */}
      </Form.Item>
    </Form>
    </div>
  );
};


// ReactDOM.render(<NormalLoginForm />, mountNode);
export default Signin;
