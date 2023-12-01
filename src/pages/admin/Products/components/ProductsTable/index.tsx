import React, { useMemo } from 'react';
import { Table, Button, Space, notification } from 'antd';
import { useGetAllProductsQuery, useDeleteProductMutation } from '../../products.service';
import { useGetCategoriesQuery } from '../../../Categories/categories.service';
import { ColumnType } from 'antd/es/table';
import { IProduct } from '../../../../../types/product.type';
import dayjs from 'dayjs';
import { openProductDrawer, setEditingProduct } from '../../product.slice';
import { formatPrice } from '../../../../../utils/function';
import { useDispatch } from 'react-redux';

const ProductsTable: React.FC = () => {
  const { data: productsData, error, isLoading } = useGetAllProductsQuery();
  const { data: categoriesData } = useGetCategoriesQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const dispatch = useDispatch();

  const categoryMap: Map<number, string> = useMemo(() => {
    const map = new Map<number, string>();
    categoriesData?.categories.forEach((category) => {
      map.set(category.category_id, category.category_name);
    });
    return map;
  }, [categoriesData]);

  if (isLoading) return <div>Đang tải...</div>;
  if (error) return <div>Có lỗi xảy ra</div>;

  const handleEdit = (productId: number) => {
    dispatch(setEditingProduct(productId));
    dispatch(openProductDrawer('edit'));
  };

  const handleDelete = (productId: number) => {
    deleteProduct(productId)
      .unwrap()
      .then(() => {
        // Hiển thị thông báo thành công
        notification.success({
          message: 'Product Deleted',
          description: `The product with ID ${productId} has been successfully deleted.`
        });
      })
      .catch((error) => {
        // Hiển thị thông báo lỗi
        notification.error({
          message: 'Error Deleting Product',
          description: `There was an error deleting the product with ID ${productId}.`
        });
        console.error('Error deleting product:', error);
      });
  };

  const columns: ColumnType<IProduct>[] = [
    {
      title: 'ID',
      dataIndex: 'product_id',
      key: 'product_id'
      // Các thuộc tính khác như width, align, etc., nếu cần
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
      // Các thuộc tính khác
    },
    {
      title: 'Original Price',
      dataIndex: 'original_price',
      key: 'original_price',
      render: (value: string) => `$${formatPrice(parseFloat(value))}`
    },
    {
      title: 'Sale Price',
      dataIndex: 'sale_price',
      key: 'sale_price',
      render: (value: string) => `$${formatPrice(parseFloat(value))}`
    },
    {
      title: 'Availability',
      dataIndex: 'is_available',
      key: 'is_available',
      render: (is_available: number) => (is_available ? 'In Stock' : 'Check Availability')
      // Các thuộc tính khác
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating'
      // Các thuộc tính khác
    },
    {
      title: 'Reviews Count',
      dataIndex: 'reviews_count',
      key: 'reviews_count'
      // Các thuộc tính khác
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (text: string) => dayjs(text).format('DD/MM/YYYY')
      // Các thuộc tính khác
    },
    {
      title: 'Category Name',
      dataIndex: 'category_id',
      key: 'category_id',
      render: (categoryId: number) => categoryMap.get(categoryId) || 'Unknown'
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record: IProduct) => (
        <Space size='middle'>
          <Button onClick={() => handleEdit(record.product_id)}>Edit</Button>
          <Button onClick={() => handleDelete(record.product_id)}>Delete</Button>
        </Space>
      )
    }
  ];

  return <Table columns={columns} dataSource={productsData?.products} rowKey='product_id' />;
};

export default ProductsTable;
