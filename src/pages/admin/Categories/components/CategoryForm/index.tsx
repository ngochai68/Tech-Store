import React, { useEffect } from 'react';
import { Modal, Input, Form, Button, message, DatePicker } from 'antd';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../categories.slice';
import { useAddCategoryMutation, useUpdateCategoryMutation, useGetCategoryByIdQuery } from '../../categories.service';
import { RootState } from '../../../../../store/store';

export interface ICategoryCreateFormValues {
  category_name: string;
}

export interface ICategoryEditFormValues {
  category_name: string;
  created_at: string;
}

const CategoryForm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { isModalOpen, modalAction, selectedCategoryId } = useSelector((state: RootState) => state.categories);
  const [addCategory] = useAddCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const categoryId = selectedCategoryId ?? -1;
  const { data: categoryData, isFetching } = useGetCategoryByIdQuery(categoryId, {
    skip: categoryId === -1
  });

  useEffect(() => {
    if (!isFetching && categoryData && modalAction === 'edit') {
      form.setFieldsValue({
        category_name: categoryData.data.category_name,
        created_at: dayjs(categoryData.data.created_at)
      });
    }
  }, [categoryData, isFetching, modalAction, form]);

  const handleCancel = () => {
    form.resetFields();
    dispatch(closeModal());
  };

  const handleSubmit = async (values: ICategoryCreateFormValues | ICategoryEditFormValues) => {
    console.log(values);
    try {
      if (modalAction === 'create') {
        await addCategory({ category_name: values.category_name }).unwrap();
        void message.success('Danh mục đã được thêm thành công');
      } else if (modalAction === 'edit' && selectedCategoryId !== null) {
        await updateCategory({ ...values, category_id: selectedCategoryId,  }).unwrap();
        void message.success('Danh mục đã được cập nhật thành công');
      } else {
        void message.error('Không thể cập nhật danh mục: ID không hợp lệ');
      }
      dispatch(closeModal());
      form.resetFields();
    } catch (error) {
      console.error('Failed to submit form:', error);
      void message.error('Đã xảy ra lỗi');
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
        {modalAction === 'edit' && (
          <Form.Item name='created_at' label='Ngày Tạo'>
            <DatePicker
              showTime
              format='YYYY-MM-DD HH:mm:ss'
              allowClear={false}
              disabledDate={(currentDate) => currentDate && currentDate > dayjs().endOf('day')}
            />
          </Form.Item>
        )}
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
