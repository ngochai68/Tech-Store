import React from 'react';
import { useGetCategoriesQuery } from './categories.service';
import CategoriesTable from './components/CategoriesTable';
import CategoryForm from './components/CategoryForm';

const Categories: React.FC = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  if (isLoading) return <div>Đang tải...</div>;
  if (error) return <div>Có lỗi xảy ra</div>;

  return (
    <div>
      {categories && <CategoriesTable categories={categories.data} />}
      <CategoryForm />
    </div>
  );
};

export default Categories;
