import React from 'react';
import ProductsTable from './components/ProductsTable';
import ProductForm from './components/ProductForm';

const Products: React.FC = () => {
  return (
    <>
      <ProductsTable /> <ProductForm />
    </>
  );
};

export default Products;
