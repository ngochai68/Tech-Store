import React from 'react';
import { useGetProductsQuery } from './products.service';
import ProductsTable from './components/ProductsTable';

const Products: React.FC = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <div>Đang tải...</div>;
  if (error) return <div>Có lỗi xảy ra</div>;

  return <div>{products && <ProductsTable products={products.data} />}</div>;
};

export default Products;
