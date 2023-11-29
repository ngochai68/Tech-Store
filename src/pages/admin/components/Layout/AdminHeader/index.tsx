import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, theme } from 'antd';
import DashboardHeader from './components/DashboardHeader';
import CategoriesHeader from './components/CategoriesHeader';
import ProductsHeader from './components/ProductsHeader';
import './AdminHeader.scss'

const { Header } = Layout;

const AdminHeader: React.FC = () => {
  const { pathname: path } = useLocation();
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <Header className='admin-header' style={{ padding: 0, background: colorBgContainer }}>
      {path === '/admin/dashboard' && <DashboardHeader />}
      {path === '/admin/categories' && <CategoriesHeader />}
      {path === '/admin/products' && <ProductsHeader />}
    </Header>
  );
};

export default AdminHeader;
