import { Outlet } from 'react-router-dom';
import React from 'react';
import { Layout } from 'antd';
import AdminSider from './AdminSider/AdminSider';
import AdminHeader from './AdminHeader';
import './RootAdminLayout.scss';

const { Content, Footer } = Layout;

const RootAdminLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }} className='admin-layout'>
      <AdminSider />
      <Layout>
        <AdminHeader />
        <Content style={{ margin: '0 16px' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ngoc Hai Nguyen</Footer>
      </Layout>
    </Layout>
  );
};

export default RootAdminLayout;
