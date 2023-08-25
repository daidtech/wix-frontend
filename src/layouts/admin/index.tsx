import React from 'react';
import './styles.scss';
import Header from 'layouts/admin/header/Header';
import Sidebar from 'layouts/admin/Sidebar';
import Products from 'components/Products';
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
