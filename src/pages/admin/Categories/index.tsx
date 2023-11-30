import React from 'react';
import CategoriesTable from './components/CategoriesTable';
import CategoryForm from './components/CategoryForm';

const Categories: React.FC = () => {
  return (
    <div>
      <CategoriesTable />
      <CategoryForm />
    </div>
  );
};

export default Categories;
