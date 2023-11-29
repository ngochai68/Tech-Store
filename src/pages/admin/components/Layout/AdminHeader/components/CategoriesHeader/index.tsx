import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../../Categories/categories.slice';

const CategoriesHeader: React.FC = () => {
  const dispatch = useDispatch();

  const handleOpenForm = () => {
    dispatch(openModal('create'));
  };

  return (
    <>
      <h3 className='admin-header__page-title'>Categories</h3>
      <Button className='admin-header__create-category-button' onClick={handleOpenForm}>
        Create Category
      </Button>
    </>
  );
};

export default CategoriesHeader;
