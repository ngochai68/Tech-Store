import React from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import { useLoginUserMutation } from '../../../auth.service';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../../auth.slice';

import './Login.scss';

interface LoginResponse {
  message: string;
  token: string;
  userId: number;
}

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const response: LoginResponse = await loginUser(values).unwrap();
      dispatch(setCredentials({ token: response.token, userId: response.userId }));
      void message.success('Đăng nhập thành công');
      navigate('/');
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'data' in error) {
        const serverError = error as { data: { message: string } };
        void message.error(`Đăng nhập không thành công: ${serverError.data.message}`);
      } else {
        void message.error('Đăng nhập không thành công');
      }
    }
  };

  const onFinish = (values: { email: string; password: string }) => {
    handleSubmit(values).catch((error) => console.error('Lỗi đăng nhập:', error));
  };

  return (
    <Card className='login-card' title='Đăng Nhập' bordered={false}>
      <Form className='login-form' form={form} layout='vertical' onFinish={onFinish} requiredMark={false}>
        <Form.Item
          className='form-item'
          name='email'
          label='Email'
          rules={[
            { required: true, message: 'Vui lòng nhập email!' },
            { type: 'email', message: 'Email không hợp lệ!' }
          ]}
        >
          <Input className='input-field' />
        </Form.Item>
        <Form.Item
          className='form-item'
          name='password'
          label='Mật khẩu'
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password className='input-field' />
        </Form.Item>
        <Form.Item className='form-item'>
          <Button className='submit-button' type='primary' htmlType='submit' loading={isLoading}>
            Đăng Nhập
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
