import React, { useEffect } from 'react';
import { Modal, Input, Form, Button, message, DatePicker } from 'antd';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { closeCategoryFormModal } from '../../categories.slice';
import { useAddCategoryMutation, useUpdateCategoryMutation, useGetCategoryByIdQuery } from '../../categories.service';
import { RootState } from '../../../../../store/store';

interface ICategoryCreateFormValues {
  category_name: string;
}

interface ICategoryEditFormValues {
  category_name: string;
  created_at: string;
}

const CategoryForm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { isCategoryFormModalOpen, modalCategoryFormAction, selectedCategoryId } = useSelector(
    (state: RootState) => state.categories
  );
  const [addCategory] = useAddCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const categoryId = selectedCategoryId ?? -1;
  const { data: categoryData, isFetching } = useGetCategoryByIdQuery(categoryId, {
    skip: categoryId === -1
  });

  useEffect(() => {
    if (!isFetching && categoryData && modalCategoryFormAction === 'edit') {
      form.setFieldsValue({
        category_name: categoryData.category.category_name,
        created_at: dayjs(categoryData.category.created_at)
      });
    }
  }, [categoryData, isFetching, modalCategoryFormAction, form]);

  const handleCancel = () => {
    form.resetFields();
    dispatch(closeCategoryFormModal());
  };

  const handleSubmit = async (values: ICategoryCreateFormValues | ICategoryEditFormValues) => {
    try {
      if (modalCategoryFormAction === 'create') {
        await addCategory({ category_name: values.category_name }).unwrap();
        void message.success('Category added successfully');
      } else if (modalCategoryFormAction === 'edit' && selectedCategoryId !== null) {
        if ('created_at' in values) {
          await updateCategory({
            ...values,
            category_id: selectedCategoryId,
            created_at: dayjs(values.created_at).format('YYYY-MM-DDTHH:mm:ss.SSSZ')
          }).unwrap();
          void message.success('Category updated successfully');
        }
      } else {
        void message.error('Cannot update category: Invalid ID');
      }
      dispatch(closeCategoryFormModal());
      form.resetFields();
    } catch (error) {
      console.error('Failed to submit form:', error);
      void message.error('An error occurred');
    }
  };

  const handleFormSubmit = (values: ICategoryCreateFormValues) => {
    handleSubmit(values).catch(console.error);
  };

  return (
    <Modal
      title={modalCategoryFormAction === 'create' ? 'Add New Category' : 'Edit Category'}
      open={isCategoryFormModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form form={form} layout='vertical' onFinish={handleFormSubmit} requiredMark={false}>
        <Form.Item
          name='category_name'
          label='Category Name'
          rules={[{ required: true, message: 'Please enter the category name!' }]}
        >
          <Input />
        </Form.Item>
        {modalCategoryFormAction === 'edit' && (
          <Form.Item name='created_at' label='Creation Date'>
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
            {modalCategoryFormAction === 'create' ? 'Add' : 'Update'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CategoryForm;
