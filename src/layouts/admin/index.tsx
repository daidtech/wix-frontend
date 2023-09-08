import React from 'react';
import './styles.scss';
import Header from 'layouts/admin/Header/Header';
import Sidebar from 'layouts/admin/Sidebar/Sidebar';
import Products from 'components/Product/Product';
import { ChildrenElement } from 'models/common';

interface AdminLayoutProps {
  children: ChildrenElement
}

function AdminLayout({children}: AdminLayoutProps) {
  return (
    <div className="admin-layout">
      <Header />
      <div className='content'>
        <Sidebar />
        <div className='content-children'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
