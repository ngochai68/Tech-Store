import React from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import { useRegisterUserMutation } from '../../../auth.service';
import { useNavigate } from 'react-router-dom';
import './Register.scss';

const Register: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleSubmit = async (values: { username: string; email: string; password: string }) => {
    try {
      await registerUser(values).unwrap();
      void message.success('Đăng ký thành công');
      form.resetFields();
      navigate('/login');
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'data' in error) {
        const serverError = error as { data: { message: string } };
        void message.error(`Đăng ký không thành công: ${serverError.data.message}`);
      } else {
        void message.error('Đăng ký không thành công');
      }
    }
  };

  const onFinish = (values: { username: string; email: string; password: string }) => {
    handleSubmit(values).catch((error) => console.error('Lỗi đăng ký:', error));
  };

  return (
    <Card className='register-card' title='Đăng Ký' bordered={false}>
      <Form className='register-form' form={form} layout='vertical' onFinish={onFinish} requiredMark={false}>
        <Form.Item
          className='form-item'
          name='username'
          label='Tên người dùng'
          rules={[{ required: true, message: 'Vui lòng nhập tên người dùng!' }]}
        >
          <Input className='input-field' />
        </Form.Item>
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
            Đăng Ký
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Register;
