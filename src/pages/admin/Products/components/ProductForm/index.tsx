import React, { useEffect } from 'react';
import { Drawer, Input, Form, Button, message, DatePicker, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useCreateProductMutation, useUpdateProductMutation, useGetProductByIdQuery } from '../../products.service';
import { RootState } from '../../../../../store/store';
import { closeProductDrawer } from '../../product.slice';
import { formatPrice } from '../../../../../utils/function';

interface IProductCreateFormValues {
  title: string;
  original_price: string;
  sale_price: string;
  image_url: string;
  is_available: number;
  rating: string;
  reviews_count: number;
  created_at: string;
  category_id: number;
}

interface IProductEditFormValues extends IProductCreateFormValues {}

const ProductForm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { isProductDrawerOpen, drawerProductFormAction, selectedProductId } = useSelector(
    (state: RootState) => state.products
  );
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const productId = selectedProductId ?? -1;
  const { data: productData, isFetching } = useGetProductByIdQuery(productId, {
    skip: productId === -1
  });

  useEffect(() => {
    if (!isFetching && productData && drawerProductFormAction === 'edit') {
      form.setFieldsValue({
        title: productData.product.title,
        original_price: productData.product.original_price,
        sale_price: productData.product.sale_price,
        image_url: productData.product.image_url,
        is_available: productData.product.is_available,
        rating: productData.product.rating,
        reviews_count: productData.product.reviews_count,
        created_at: dayjs(productData.product.created_at),
        category_id: productData.product.category_id
      });
    }
  }, [productData, isFetching, drawerProductFormAction, form]);

  const handleCancel = () => {
    form.resetFields();
    dispatch(closeProductDrawer());
  };

  const handleSubmit = async (values: IProductCreateFormValues | IProductEditFormValues) => {
    try {
      if (drawerProductFormAction === 'create') {
        await createProduct({ ...values }).unwrap();
        void message.success('Category added successfully');
      } else if (drawerProductFormAction === 'edit' && selectedProductId !== null) {
        if ('created_at' in values) {
          await updateProduct({
            ...values,
            product_id: selectedProductId,
            created_at: dayjs(values.created_at).format('YYYY-MM-DDTHH:mm:ss.SSSZ')
          }).unwrap();
          void message.success('Category updated successfully');
        }
      } else {
        void message.error('Cannot update category: Invalid ID');
      }
      dispatch(closeProductDrawer());
      form.resetFields();
    } catch (error) {
      console.error('Failed to submit form:', error);
      void message.error('An error occurred');
    }
  };

  const handleFormSubmit = (values: IProductCreateFormValues) => {
    handleSubmit(values).catch(console.error);
  };

  return (
    <Drawer
      title={drawerProductFormAction === 'create' ? 'Add New Product' : 'Edit Product'}
      placement='right'
      onClose={handleCancel}
      open={isProductDrawerOpen}
      width={720}
    >
      <Form form={form} layout='vertical' onFinish={handleFormSubmit} requiredMark={false}>
        <Form.Item
          name='title'
          label='Product Name'
          rules={[{ required: true, message: 'Please enter the product name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='original_price'
          label='Original Price'
          rules={[{ required: true, message: 'Please enter the original price!' }]}
        >
          <InputNumber
            style={{ width: '100%' }}
            formatter={(value) => {
              if (value === undefined) {
                return '';
              }

              const numericValue = Number(value);
              return formatPrice(numericValue);
            }}
            parser={(value) => value!.replace(/\$\s?|,/g, '')}
          />
        </Form.Item>

        <Form.Item
          name='sale_price'
          label='Sale Price'
          rules={[{ required: true, message: 'Please enter the sale price!' }]}
        >
          <InputNumber
            style={{ width: '100%' }}
            formatter={(value) => {
              if (value === undefined) {
                return '';
              }

              const numericValue = Number(value);
              return formatPrice(numericValue);
            }}
            parser={(value) => value!.replace(/\$\s?|,/g, '')}
          />
        </Form.Item>

        <Form.Item
          name='image_url'
          label='Image URL'
          rules={[{ required: true, message: 'Please enter the image URL!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='is_available'
          label='Availability'
          rules={[{ required: true, message: 'Please specify if the product is available!' }]}
        >
          <Input type='number' min={0} max={1} />
        </Form.Item>

        <Form.Item
          name='rating'
          label='Rating'
          rules={[{ required: true, message: 'Please enter the product rating!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='reviews_count'
          label='Reviews Count'
          rules={[{ required: true, message: 'Please enter the reviews count!' }]}
        >
          <Input type='number' />
        </Form.Item>

        {drawerProductFormAction === 'edit' && (
          <Form.Item name='created_at' label='Created At'>
            <DatePicker
              showTime
              format='YYYY-MM-DD HH:mm:ss'
              allowClear={false}
              disabledDate={(currentDate) => currentDate && currentDate > dayjs().endOf('day')}
            />
          </Form.Item>
        )}

        <Form.Item
          name='category_id'
          label='Category ID'
          rules={[{ required: true, message: 'Please select a category!' }]}
        >
          <Input type='number' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            {drawerProductFormAction === 'create' ? 'Add' : 'Update'}
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default ProductForm;
