import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { openProductDrawer } from '../../../../../Products/product.slice';

const ProductsHeader: React.FC = () => {
  const dispatch = useDispatch();

  const handleOpenForm = () => {
    dispatch(openProductDrawer('create'));
  };

  return (
    <>
      <h3 className='admin-header__page-title'>Products</h3>
      <Button className='admin-header__create-button' onClick={handleOpenForm}>
        Create Product
      </Button>
    </>
  );
};

export default ProductsHeader;
