import React from 'react';
import { Button, Form, Input } from 'antd';
import './SubscriptionForm.scss';

interface FormValues {
  user: {
    email: string;
  };
}

const SubscriptionForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: FormValues) => {
    console.log(values);
    form.resetFields();
  };

  const validateMessages = {
    required: '',
    types: {
      email: ''
    }
  };

  return (
    <Form
      form={form}
      className='footer__form'
      name='subscription-newsletter'
      onFinish={onFinish}
      validateMessages={validateMessages}
      layout='inline'
    >
      <Form.Item className='footer__item-input' name={['user', 'email']} rules={[{ type: 'email', required: true }]}>
        <Input className='footer__input' placeholder='Your Email' />
      </Form.Item>

      <Form.Item className='footer__item-button'>
        <Button className='footer__button' type='primary' htmlType='submit'>
          Subscribe
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SubscriptionForm;
