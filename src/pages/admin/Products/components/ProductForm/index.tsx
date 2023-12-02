import React, { useEffect } from 'react';
import { Drawer, Input, Form, Button, message, DatePicker, InputNumber, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useCreateProductMutation, useUpdateProductMutation, useGetProductByIdQuery } from '../../products.service';
import { useGetCategoriesQuery } from '../../../Categories/categories.service';
import { RootState } from '../../../../../store/store';
import { closeProductDrawer } from '../../product.slice';
import { formatPrice, parseCurrency } from '../../../../../utils/function';
import { UploadChangeParam } from 'antd/lib/upload';

interface UploadFile extends File {
  originFileObj: File;
}

interface IProductCreateFormValues {
  title: string;
  original_price: string;
  sale_price: string;
  is_available: number;
  image: UploadFile[];
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
  const { data: categoriesData } = useGetCategoriesQuery();

  useEffect(() => {
    if (!isFetching && productData && drawerProductFormAction === 'edit') {
      form.setFieldsValue({
        title: productData.product.title,
        original_price: productData.product.original_price,
        sale_price: productData.product.sale_price,
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
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (key === 'image' && values.image && values.image.length > 0) {
          const file = values.image[0] as unknown as UploadFile;
          formData.append('image', file.originFileObj);
        } else if (key !== 'image') {
          const value = values[key as keyof typeof values];
          if (typeof value === 'string' || value instanceof Blob) {
            formData.append(key, value);
          } else {
            formData.append(key, String(value));
          }
        }
      });

      if (drawerProductFormAction === 'create') {
        await createProduct(formData).unwrap();
        void message.success('Category added successfully');
      } else if (drawerProductFormAction === 'edit' && selectedProductId !== null) {
        await updateProduct({ formData, product_id: selectedProductId }).unwrap();
        void message.success('Category updated successfully');
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
            min={0}
            formatter={(value) => `$ ${formatPrice(Number(value || 0))}`}
            parser={parseCurrency}
          />
        </Form.Item>

        <Form.Item
          name='sale_price'
          label='Sale Price'
          rules={[{ required: true, message: 'Please enter the sale price!' }]}
        >
          <InputNumber
            style={{ width: '100%' }}
            min={0}
            formatter={(value) => `$ ${formatPrice(Number(value || 0))}`}
            parser={parseCurrency}
          />
        </Form.Item>

        <Form.Item
          name='image'
          label='Product Image'
          valuePropName='fileList'
          getValueFromEvent={(e: UploadChangeParam) => e.fileList}
        >
          <Upload
            name='image'
            listType='picture'
            beforeUpload={() => false} // Ngăn chặn tự động tải lên
            maxCount={1} // Chỉ cho phép một tệp
          >
            <Button icon={<UploadOutlined />}>Click to upload (Max: 1)</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name='is_available'
          label='Availability'
          rules={[{ required: true, message: 'Please specify if the product is available!' }]}
        >
          <Select>
            <Select.Option value={1}>In Stock</Select.Option>
            <Select.Option value={0}>Check Availability</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name='rating'
          label='Rating'
          rules={[{ required: true, message: 'Please enter the product rating!' }]}
        >
          <InputNumber style={{ width: '100%' }} min={0} max={5} step={0.1} />
        </Form.Item>

        <Form.Item
          name='reviews_count'
          label='Reviews Count'
          rules={[{ required: true, message: 'Please enter the reviews count!' }]}
        >
          <InputNumber style={{ width: '100%' }} min={0} step={1} />
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
          label='Category'
          rules={[{ required: true, message: 'Please select a category!' }]}
        >
          <Select placeholder='Select a category'>
            {categoriesData?.categories.map((category) => (
              <Select.Option key={category.category_id} value={category.category_id}>
                {category.category_name}
              </Select.Option>
            ))}
          </Select>
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
