import React from 'react';
import { Table, Button, Space, notification } from 'antd';
import { ColumnType } from 'antd/es/table';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { openCategoryFormModal, setEditingCategoryFormModal } from '../../categories.slice';
import { ICategory } from '../../../../../types/category.type';
import { useDeleteCategoryMutation, useGetCategoriesQuery } from '../../categories.service';

const CategoriesTable: React.FC = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  const [deleteCategory] = useDeleteCategoryMutation();
  const dispatch = useDispatch();

  // Hàm xử lý khi nhấn nút Chỉnh sửa
  const handleEdit = (categoryId: number) => {
    dispatch(setEditingCategoryFormModal(categoryId));
    dispatch(openCategoryFormModal('edit'));
  };

  // Hàm xử lý khi nhấn nút Xóa
  const handleDelete = (categoryId: number) => {
    deleteCategory(categoryId)
      .unwrap()
      .then(() => {
        // Hiển thị thông báo thành công
        notification.success({
          message: 'Category Deleted',
          description: `The category with ID ${categoryId} has been successfully deleted.`
        });
      })
      .catch((error) => {
        // Hiển thị thông báo lỗi
        notification.error({
          message: 'Error Deleting Category',
          description: `There was an error deleting the category with ID ${categoryId}.`
        });
        console.error('Error deleting category:', error);
      });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  const columns: ColumnType<ICategory>[] = [
    {
      title: 'ID',
      dataIndex: 'category_id',
      key: 'category_id',
      align: 'center' as const,
      width: '5%'
    },
    {
      title: 'Category Name',
      dataIndex: 'category_name',
      key: 'category_name',
      width: '20%'
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      align: 'center' as const,
      key: 'created_at',
      render: (text: string) => dayjs(text).format('DD/MM/YYYY HH:mm'),
      sorter: (a, b) => dayjs(a.created_at).unix() - dayjs(b.created_at).unix(),
      width: '10%'
    },
    {
      title: 'Product Count',
      dataIndex: 'product_count',
      key: 'product_count',
      align: 'center' as const,
      sorter: (a, b) => a.product_count - b.product_count,
      width: '10%'
    },
    {
      title: 'Actions',
      key: 'action',
      align: 'center' as const,
      render: (_: ICategory, record: ICategory) => (
        <Space size='middle'>
          <Button onClick={() => handleEdit(record.category_id)}>Edit</Button>
          <Button onClick={() => handleDelete(record.category_id)}>Delete</Button>
        </Space>
      ),
      width: '20%'
    }
  ];

  return <Table columns={columns} dataSource={categories?.categories} rowKey='category_id' />;
};

export default CategoriesTable;
