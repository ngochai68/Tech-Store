import React from 'react';
import { Table, Button, Space } from 'antd';
import { ColumnType } from 'antd/es/table';
import moment from 'moment';
import { IProduct } from '../../../../../types/product.type';

interface ProductsTableProps {
  products: IProduct[];
}

const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => {
  // Function handling Edit button click
  const handleEdit = (productId: number) => {
    console.log('Editing product with ID:', productId);
    // Handle edit logic here
  };

  const columns: ColumnType<IProduct>[] = [
    {
      title: 'ID',
      dataIndex: 'product_id',
      key: 'product_id',
      align: 'center' as const,
      width: '5%'
    },
    {
      title: 'Image',
      dataIndex: 'image_url',
      key: 'image_url',
      align: 'center' as const,
      render: (image: string) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={image}
            alt='Product'
            style={{ maxWidth: '100px', maxHeight: '100px', width: 'auto', height: 'auto' }}
          />
        </div>
      ),
      width: '10%'
    },
    {
      title: 'Product Name',
      dataIndex: 'title',
      key: 'title',
      width: '20%'
    },
    {
      title: 'Original Price',
      dataIndex: 'original_price',
      key: 'original_price',
      align: 'center' as const,
      width: '15%',
      render: (text: string) => `$${text}` // Format the price as needed
    },
    {
      title: 'Sale Price',
      dataIndex: 'sale_price',
      key: 'sale_price',
      align: 'center' as const,
      width: '15%',
      render: (text: string) => `$${text}` // Format the price as needed
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      align: 'center' as const,
      key: 'created_at',
      render: (text: string) => moment(text).format('DD/MM/YYYY HH:mm'),
      sorter: (a, b) => moment(a.created_at).unix() - moment(b.created_at).unix(),
      width: '15%'
    },
    {
      title: 'Actions',
      key: 'action',
      align: 'center' as const,
      render: (_: IProduct, record: IProduct) => (
        <Space size='middle'>
          <Button onClick={() => handleEdit(record.product_id)}>Edit</Button>
          {/* <Button onClick={() => handleDelete(record.product_id)}>Delete</Button> */}
        </Space>
      ),
      width: '20%'
    }
  ];

  return <Table columns={columns} dataSource={products} rowKey='product_id' />;
};

export default ProductsTable;
