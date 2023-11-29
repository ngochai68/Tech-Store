import React from 'react';
import { Modal, Input, Form, Button, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../categories.slice';
import { useAddCategoryMutation } from '../../categories.service';
import { RootState } from '../../../../../store/store';

export interface ICategoryCreateFormValues {
  category_name: string;
}

export interface ICategoryEditFormValues {
  category_name: string;
  created_at: string;
  product_count: number;
}

const CategoryForm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [addCategory] = useAddCategoryMutation();
  const { isModalOpen, modalAction } = useSelector((state: RootState) => state.categories);

  const handleCancel = () => {
    form.resetFields();
    dispatch(closeModal());
  };

  const handleSubmit = async (values: ICategoryCreateFormValues) => {
    try {
      if (modalAction === 'create') {
        await addCategory({ category_name: values.category_name }).unwrap();
        dispatch(closeModal());
        form.resetFields();
        void message.success('Danh mục đã được thêm thành công');
      }
      // Logic cho 'edit' nếu cần
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  };

  const handleFormSubmit = (values: ICategoryCreateFormValues) => {
    handleSubmit(values).catch(console.error);
  };

  return (
    <Modal
      title={modalAction === 'create' ? 'Thêm Danh Mục Mới' : 'Chỉnh Sửa Danh Mục'}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form form={form} layout='vertical' onFinish={handleFormSubmit}>
        <Form.Item
          name='category_name'
          label='Tên Danh Mục'
          rules={[{ required: true, message: 'Vui lòng nhập tên danh mục!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            {modalAction === 'create' ? 'Thêm Mới' : 'Cập Nhật'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CategoryForm;
